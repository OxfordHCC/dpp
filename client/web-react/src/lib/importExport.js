import db from './store';

const META_SIZE = 1;//bytes

export async function getDataUrl(){
	const inxs = await db.intersection.toArray();
	const len = inxs.length;
	const data = inxs.map(JSON.stringify).join('\n');
	const blob = new Blob([`${len}\n`,data], { type : "text/plain" });
	return URL.createObjectURL(blob);
}

//file - File/Blob containing json export file
export async function importFile(file, progressCb){
	console.log('import file', file);
	
	const meta = (await file.slice(0, META_SIZE).text()).split(" ");	
	const data = file.slice(META_SIZE + 1);

	const [ len ] =  meta;
	const dataStream = data.stream();
	let lineIndex = 0;
	
	const processLine = (line) => {
		lineIndex += 1;
		const inx = JSON.parse(line);
		db.intersection.put(inx);
		progressCb(lineIndex/len);
	}

	for await (let line of makeIterator(dataStream)) {
		processLine(line);
	}
}

async function* makeIterator(stream) {
  const utf8Decoder = new TextDecoder("utf-8");
  let reader = stream.getReader();
  let {value: chunk, done: readerDone} = await reader.read();
  chunk = chunk ? utf8Decoder.decode(chunk) : "";

  let re = /\r\n|\n|\r/gm;
  let startIndex = 0;
  let result;

  for (;;) {
    let result = re.exec(chunk);
    if (!result) {
      if (readerDone) {
        break;
      }
      let remainder = chunk.substr(startIndex);
      ({value: chunk, done: readerDone} = await reader.read());
      chunk = remainder + (chunk ? utf8Decoder.decode(chunk) : "");
      startIndex = re.lastIndex = 0;
      continue;
    }
    yield chunk.substring(startIndex, result.index);
    startIndex = re.lastIndex;
  }
  if (startIndex < chunk.length) {
    // last line didn't end in a newline char
    yield chunk.substr(startIndex);
  }
}
