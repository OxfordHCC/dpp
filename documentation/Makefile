web-reference:
	jsdoc -r ${DPP_WEB_ROOT}/src -d ./web-reference

native-reference:
	cd ${DPP_NATIVE_ROOT} && gradle dokkaHtml
	cp -r ${DPP_NATIVE_ROOT}/app/build/dokka/html ./native-reference

reference: web-reference native-reference
	echo "done"

clean:
	rm -rf ./native-reference
	rm -rf ./web-reference

