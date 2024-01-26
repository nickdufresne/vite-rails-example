import { render, act, waitFor } from '@testing-library/react';
import { describe, expect, it, vi, beforeEach } from 'vitest'
import App from '../../components/App';

const stubbedResponses = []

function stubFetchResponse(url, response) {
  stubbedResponses.push([url, response]);
}

async function fetch(resource, options) {
  const response = stubbedResponses.shift();
  if (resource == response[0]) {
    return { json: () => new Promise((resolve) => resolve(response[1])) }
  } else {
    throw new Error(`URL mismatch: ${response[0]} != ${resource}`);
  }
}

global.fetch = vi.fn(fetch);

describe("App", async() => {

  it("renders", async() => {
    const booksApiResponse = [
      {
        title: 'Book One',
        author: 'Author One',
        description: 'Description',
      },
    ]

    stubFetchResponse("/api/books", booksApiResponse);

    const { container } = render(
      <App />,
    );

    expect(container).toMatchSnapshot();

    await act(async () => {
      return Promise.resolve();
    });

    expect(container).toMatchSnapshot();
  });
});
