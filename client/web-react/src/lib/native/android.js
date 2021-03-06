/**
   @module android adapter
*/

import { uuidv4 } from "../util.js";

export default class AndroidInterface{
	constructor(options = {timeout: 5000}){
		window.AndroidInterface = this;
		this.callbackMap = {};
		this.options = options;
	}

	reply(message, { data, error }){
		return { id: message.id, data, error, type:"reply" };
	}

	handleReply(message){
		const { id, data, error } = message;
		const cb = this.callbackMap[id];
		if(cb){
			(data && cb.resolve(data)) || (error && cb.reject(error));
			delete this.callbackMap[message.id];
		}
	}
	
	async receive(message){ //from native
		try{
			if(message.type === "reply"){
				return this.handleReply(message);
			}
			this.send(this.reply(message, {
				data: await this.handleMessage(message)
			}));
			return;
		}catch(error){
			console.error('error when handling received message', error);
			if(message.type !== "reply"){
				this.send(this.reply(message, { error }));
			}
		}
	}

	// send message to native. If no id, generate a new uuid
	send(message){ //to native
		if(!("id" in message)){
			message.id = uuidv4();
		}

		// if we're sending back a reply, just resolve the send call.
		// We do not expect an answer back to this message.  if not a
		// reply, create two promises and race them:
		//	- one promise times out after options.timeout
		//  - the other is stored in the callbackmap and gets resolved
		//    when a reply for this message is received.
		const promise = (message.type==='reply')?
			  Promise.resolve() :
			  Promise.race([
				  new Promise((resolve, reject) => {
					  this.callbackMap[message.id] = { resolve, reject };
				  }),
				  new Promise((resolve, reject) => {
					  setTimeout(() => {
						  delete this.callbackMap[message.id];
						  reject({ error: 'Timeout', message: `Message ${message.id} timed out.` })
					  }, this.options.timeout);
				  })
			  ]);
		window.Android.sendMessage(JSON.stringify(message));
		return promise;
	}

	setMessageHandler(handler){
		this.handleMessage = handler;
	}
}
