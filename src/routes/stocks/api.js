const fetchAPI = async (path, params) => {
	const baseUrl = 'http://localhost:3004';
	const urlParams = new URLSearchParams(params);

	const url = params ? `${baseUrl}${path}?${urlParams}` : `${baseUrl}${path}`;

	const res = await fetch(url);
	const json = await res.json();

	return json;
};

export const getTrendingStock = () => {
	return fetchAPI('/stocks');
};

export const getStockNews = () => {
	return fetchAPI('/news');
};

export const getStock = (stockSymbol) => {
	return fetchAPI(`/stocks/${stockSymbol}`);
};
