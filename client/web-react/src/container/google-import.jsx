import React from 'react';
import { deNormCoord } from '../lib/util.js';
import location from '../lib/location.js';
import '../style/google-import.css';
import { Header } from 'semantic-ui-react';


const GoogleImport = () => {
    const fileInput = React.createRef();
    // const importProgressSpan = React.createRef();
    // const importDetailsSpan = React.createRef();
    // const importLog = React.createRef();

    const [progress, setProgress] = React.useState('');
    const [details, setDetails] = React.useState({});

    const state = {
        stopImport: false
    }; 
    React.useEffect(() => {
        fileInput.current.onchange = (evt) => {
            const file = evt.target.files[0];
            importHistory(file, state, {
                onClose: () => {
                    evt.target.value = null;
                },
                onLog: (str) => {
                    //TODO: log
                },
                onReadChunk: (chunkIndex) => {
                    setProgress(chunkIndex / details.chunkLen);
                    setDetails({
                        ...details,
                        chunkIndex
                    });
                },
                onStart: (chunkSize) => {
                    const fileSize = file.size;
                    let chunkLen = Math.ceil(fileSize / chunkSize);
                    setDetails({
                        fileSize,
                        chunkSize,
                        chunkLen,
                        chunkIndex: 0
                    });
                }
            });
        };
    },[details, fileInput, state]);


    const stopImport = () => {
        state.stopImport = true;
    };

    return (
        <div className="settings-page" id="google-import">
            <Header as="h3" color="blue">Import Google Location History</Header>
            Download your google location data and import file from ./Takeout/Location History.json (after unzipping).
            <div>
                <input ref={fileInput} type="file" accept=".json"/>
            </div>
            <div>
                <div>
                    <span id="import-progress-detail">
                        File size: {details.fileSize}
                        Chunk size: {details.chunkSize}
                        Reading chunk {details.chunkIndex} out of {details.chunkLen}.
                    </span>
                </div>
                <div>
                    Progress: <span id="import-progress">{progress}</span>
                </div>
                <div><button id="stop-import" onClick={stopImport}>Stop</button></div>
                <div>
                    <div id="import-log">{}</div>
                </div>
            </div>
        </div>
    );
}

//Read file chunk by chunk so we don't kill the browser.
function importHistory(file, state, listeners){
    //WARNING FRAGILE CODE AHEAD
	//DO NOT CHANGE
	const HEADER = `{
  "locations" : [ `;
	const FOOTER = `]
}`;
	const CLOSED_CURLY_BRACE = 125;
	//OK, CAN CHANGE FROM HERE 
	const CHUNK_SIZE = 1000 * 1024; //1MB 
	let ARR_END = file.size - FOOTER.length;
	let start = HEADER.length; //skip header
	let chunkCount = 0;

	let textEncoder = new TextEncoder();

	const domLog = (str) => listeners && listeners.onLog && listeners.onLog(str);

	const reader = new FileReader();

	//flIndicator -- f(irst)l(evel)Indicator -- when we pass latitudeE7 
	//we know we're on the first level
	const flIndicatorUint8 = textEncoder.encode('latitudeE7');
	
	const reachedFirstLevel = (i, buffer) => {
		for(let j = 0, n = flIndicatorUint8.length; j < n; j++){
			if(flIndicatorUint8[j] !== buffer[i+j]){
				return false;
			}
		}
		return true;
	}

	reader.onload = async () => {
		let buffer = new Uint8Array(reader.result);
		let end = start + buffer.length;
		let onFirstLevel = false;
		const isLastChunk = (start + CHUNK_SIZE) >= ARR_END;

		//BEFORE:
		//{____________},_{_____
		//[START          END]     <-- "buffer pointers"
		for(let i = buffer.length; i > 0; i--){
			if(reachedFirstLevel(i, buffer)){
				onFirstLevel = true;
			}
			if(onFirstLevel && buffer[i] === CLOSED_CURLY_BRACE){
				break;
			}
			end = end-1;
		}
		end +=1;
		//AFTER: 
		//{____________},_{_____  
		//[START    END]           <-- "buffer pointers"

		//process array between start, end;
		await processChunk(buffer.slice(0, end-start), chunkCount);
		chunkCount +=1;

		start = end + 2; //skip ', ';
		if(start < ARR_END && !state.stopImport && !isLastChunk){
			seek();
		}else{
			listeners && listeners.onClose && listeners.onClose();
		}
	};

	//TODO: if the entries in the tail were duplicates,
	//the head of the next chunk may continue the series
	//of duplicates.
	async function processChunk(buffer, cC){
		const ascii 	= new TextDecoder('utf8').decode(buffer);
		try{
			const jsonData 	= JSON.parse(`${HEADER}${ascii}${FOOTER}`);
			const entries 	= jsonData.locations.map(googleEntry => ({
				timestampMs: Number(googleEntry.timestampMs),
				latitude: deNormCoord(googleEntry.latitudeE7),
				longitude: deNormCoord(googleEntry.longitudeE7),
				accuracy: googleEntry.accuracy
			}));

			domLog(`[chunk ${cC}] : ${entries.length} entries`);
			let res = await location.bulkPut(entries);
			domLog(`[chunk ${cC}]: stored ${res} compressed entries`);
			listeners && listeners.onReadChunk && listeners.onReadChunk(cC);
		}catch(err){
			console.error(err);
			reader.abort();
			printTail(buffer.length-1, buffer);
            printHead(0, buffer);
		}
	}

	function seek(){
		let end = start + CHUNK_SIZE;
		if(end > ARR_END){
			end = ARR_END;
		}
		let slice = file.slice(start, end);
		reader.readAsArrayBuffer(slice);
	}
	seek();
	listeners && listeners.onStart && listeners.onStart(CHUNK_SIZE);
}

//DEBUGGING functions
function printSlice(slice){
	console.log(new TextDecoder('utf-8').decode(slice));
}

function printTail(i, buffer){
	console.log('TAIL: printing position', i);
	const windowSize = 50;
	let slice = buffer.slice(i-windowSize, i);
	printSlice(slice);
}

function printHead(i, buffer){
	console.log('HEAD: printing position', i);
	const windowSize = 50;
	let slice = buffer.slice(i, i+windowSize);
	printSlice(slice);
}


export default GoogleImport;
