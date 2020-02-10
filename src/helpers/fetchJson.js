// Inspired by https://gist.github.com/iliakan/dd6ad0dadb6630544d1187c4c94ccf40
import notifier from '../lib/notifier.js';

// console.clear();
export default async function fetchJson (url, params) {
  let response;

  // Error while loading (bad url or connection)
  try {
    response = await fetch(url, params);
  } catch (error) {
    throw new FetchError(response, null, `Network error for url ${url}`);
  }

  // Bad response from server
  if (!response.ok) {
    let body;
    const statusText = response.statusText;

    try {
      body = await response.json();
      // can't reproduce getting body with not ok status
    } catch (error) {
      // do nothing
    }
    let message = `Error ${response.status} for url ${url}`;

    if (statusText) {
      message += `: ${statusText}`;
    }

    throw new FetchError(response, body, message);
  }

  // Response is correct, try to get data
  try {
    response = await response.json();
  } catch (error) {
    throw new FetchError(response, null, error.message);
  }

  return response;
}

class FetchError extends Error {
  constructor (response, body, message) {
    super(message);
    this.name = 'FetchError';

    this.response = response;
    this.body = body;
  }
}

// handle uncaught failed fetch through
window.addEventListener('unhandledrejection', event => {
  if (event.reason instanceof FetchError) {
    notifier(event.reason.message, 'error');
  }
});
