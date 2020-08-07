import { getDataUrl } from '../../lib/importExport';

export const UPDATE_URL = "EXPORT_URL";
export const updateUrl = url => ({
	type: UPDATE_URL,
	url
});

export const resetExportUrl = () => updateUrl(null);

export const fetchExportUrl = () => async (dispatch, getState) => {

	const exportUrl = await getDataUrl();
	console.log('export url is ', exportUrl);
	dispatch(updateUrl(exportUrl));
}
