const dexieMock = function() {
	return new Proxy({
		open: () => Promise.resolve(),
		version: () => ({
			stores: jest.fn()
		})
	}, {
		get: function(obj, prop){
			return prop in obj?
				obj[prop] :
				{
					toArray: () => []
				}
		}
	});
    
};

module.exports = dexieMock;
