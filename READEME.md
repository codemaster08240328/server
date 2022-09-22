# Server RESTful API for media lists.
> NODE 14.x is recommended.

## Description
This endpoint consumes graphql API for media (Check [here](https://anilist.gitbook.io/anilist-apiv2-docs/)).

And it serves latest 10 media items with `title`, `description` and `coverImage`.

## How to run
1. Clone repository:
```bash
$ git clone https://github.com/codemaster08240328/server
```

2. Run
```bash
$ cd server
$ npm i
$ npm start
```
> Check the app is running correctly by visiting http://localhost:4000/health

> You can see API documentation: http://localhost:4000/api-docs

## How to use this endpoint
```code
Endpoint: /media-items
Response:
{
  "data": {
    "Page": {
      "media": [
        {
          "id":1,
          "title": {
            "english":"Cowboy Bebop"
          },
          "description": "DESCRIPTION...",
          "coverImage": {
            "medium": <IMAGE LINK>
          }
        },
        ...
      ]
    }
  }
}
```