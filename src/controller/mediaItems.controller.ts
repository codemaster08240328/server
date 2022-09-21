import fetch from 'cross-fetch';

const MediaItems = async (_req, res) => {
  var query = `
    query {
      Page (page: 1, perPage: 10) {
        media {
          id,
          title {
            english
          },
          description,
          coverImage {
            medium
          }
        }
      }
    }
    `;

  // Define the config we'll need for our Api request
  var url = 'https://graphql.anilist.co',
    options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({ query })
    };

  // Make the HTTP Api request
  const result = await fetch(url, options).then(handleResponse)
                    .catch(handleError);

  return res.send(result);
}

function handleResponse(response) {
  return response.json().then(function (json) {
      return response.ok ? json : Promise.reject(json);
  });
}

function handleError(error) {
  console.error(error);
}

export default MediaItems;