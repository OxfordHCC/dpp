import NativeInterface from './nativeInterface.js';
import WebInterface from './web.js';

describe('web interface', () => {
	const nativeInterface = NativeInterface(new WebInterface());
	
	test('getServices should return array of service', async ()=>{
		const services = await nativeInterface.getServices();
		expect(Array.isArray(services)).toEqual(true);
	});
});
