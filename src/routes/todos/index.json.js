import { api } from './_api';

// GET /todos.json
export const get = async (request) => {
	// request.locals.userid comes from src/hooks.js
	const response = await api(request, `todos/${request.locals.userid}`);

	if (response.status === 404) {
		// user hasn't created a todo list.
		// start with an empty array
		return { body: [] };
	}

  // const options = {
  //   method: 'GET',
  //   params: {modules: 'defaultKeyStatistics,assetProfile'},
  //   headers: {
  //     'x-api-key': '6WmkvBOmLh4Bh9Ab7ORE448meKov9J0A83uwPZ6Z'
  //   }
  // };

  // const res = await fetch('https://yfapi.net/v6/finance/quote?symbols=AAPL ', options);
  // const jsno = await res.json()

  //console.log('res', jsno.quoteResponse.result)

	return response;
};

// POST /todos.json
export const post = async (request) => {
	const response = await api(request, `todos/${request.locals.userid}`, {
		// because index.svelte posts a FormData object,
		// request.body is _also_ a (readonly) FormData
		// object, which allows us to get form data
		// with the `body.get(key)` method
		text: request.body.get('text')
	});

	return response;
};
