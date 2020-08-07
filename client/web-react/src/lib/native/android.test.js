import AndroidInterface from './android.js';


describe('android native interface', () => {
	
	let androidInterface = new AndroidInterface({
		timeout: 1000
	});

	beforeAll(()=>{
		//mocked Android native counterpart
		window.Android = {
			sendMessage: (message) => {
				message = JSON.parse(message);
				if(message.id === 'successTest'){
					androidInterface.receive({
						type: 'reply', id: message.id, data: "some data"
					})
				}
				if(message.id === 'errorTest'){
					androidInterface.receive({
						type: 'reply', id: message.id, error: "some error"
					})
				}
				if(message.id === 'echo'){
					androidInterface.receive({
						type: 'reply', id: message.id, data: message.data
					})
				}
				//else do nothing
			}
		};
	});

	test("window.AndroidInterface is set", () => {
		expect(window.AndroidInterface).toBeDefined();
	});
	
	test("callback map is initially empty", () => {
		expect(window.AndroidInterface.callbackMap).toEqual({});
		expect(window.AndroidInterface.callbackMap[1]).toBeUndefined();
	});
	
	//this test should be removed tbf, but I'm writing it for now, to help with development
	test("callback is added when message is sent to android", async () => {
		let promise = androidInterface.send({ id: 123 }).catch(err => {
			expect(androidInterface.callbackMap['123']).toBeUndefined();
		})
		//note that this is called before the promise is rejected above...
		expect(androidInterface.callbackMap['123']).toBeDefined();
		return promise;
	})

	test("promise is resolved on success reply", () => {
		let reply = androidInterface.send({ id: 'successTest' });
		return expect(reply).resolves.toEqual('some data');
	});

	test("promise is rejected on error reply", () => {
		let reply = androidInterface.send({ id: 'errorTest' });
		return expect(reply).rejects.toEqual('some error');
	});
	
	test("promise rejects with timeout if no response", () => {
		return androidInterface.send({ id: 'timeout' }).catch(err => {
			expect(err).toEqual({ error: "Timeout" });
		})
	});

	test("callback map is not leaking", () => {
		const echo = data => { return androidInterface.send({ id: 'echo', data }) };
		return Promise.all([
			echo(1),
			echo(2),
			echo(3)
		]).then(([echo1, echo2, echo3]) => {
			expect(echo1).toEqual(1);
			expect(echo2).toEqual(2);
			expect(echo3).toEqual(3);
			expect(Object.keys(androidInterface.callbackMap).length).toEqual(0);
		});
	});
	
});

