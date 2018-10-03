import React, { Component } from 'react';
import './App.css';
import List from './List';

const comicData = {
  "code": 200,
  "status": "Ok",
  "copyright": "© 2018 MARVEL",
  "attributionText": "Data provided by Marvel. © 2018 MARVEL",
  "attributionHTML": "<a href=\"http://marvel.com\">Data provided by Marvel. © 2018 MARVEL</a>",
  "etag": "7789c172af56a3e99919d43df9a72685feccb05d",
  "data": {
    "offset": 0,
    "limit": 20,
    "total": 1,
    "count": 1,
    "results": [
      {
        "id": 60610,
        "digitalId": 0,
        "title": "Deadpool (2015) #36",
        "issueNumber": 36,
        "variantDescription": "",
        "description": "SECRET EMPIRE AFTERMATH! Everything works out great and Deadpool gets a happy ending Wait - are we allowed to lie in solicits? We are, right?",
        "modified": "2017-09-06T16:08:30-0400",
        "isbn": "",
        "upc": "75960608332903611",
        "diamondCode": "JUL171032",
        "ean": "",
        "issn": "1946-9292",
        "format": "Comic",
        "pageCount": 32,
        "textObjects": [
          {
            "type": "issue_solicit_text",
            "language": "en-us",
            "text": "SECRET EMPIRE AFTERMATH! Everything works out great and Deadpool gets a happy ending Wait - are we allowed to lie in solicits? We are, right?"
          }
        ],
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/60610",
        "urls": [
          {
            "type": "detail",
            "url": "http://marvel.com/comics/issue/60610/deadpool_2015_36?utm_campaign=apiRef&utm_source=464d75d8cc0907c491cbcc94f4c040ee"
          },
          {
            "type": "purchase",
            "url": "http://comicstore.marvel.com/Deadpool-36/digital-comic/45728?utm_campaign=apiRef&utm_source=464d75d8cc0907c491cbcc94f4c040ee"
          }
        ],
        "series": {
          "resourceURI": "http://gateway.marvel.com/v1/public/series/20613",
          "name": "Deadpool (2015 - 2017)"
        },
        "variants": [],
        "collections": [],
        "collectedIssues": [],
        "dates": [
          {
            "type": "onsaleDate",
            "date": "2017-09-13T00:00:00-0400"
          },
          {
            "type": "focDate",
            "date": "2017-08-21T00:00:00-0400"
          }
        ],
        "prices": [
          {
            "type": "printPrice",
            "price": 3.99
          }
        ],
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/8/e0/59b04cb0bb952",
          "extension": "jpg"
        },
        "images": [
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/8/e0/59b04cb0bb952",
            "extension": "jpg"
          },
          {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/a/10/597f90b7ab93d",
            "extension": "jpg"
          }
        ],
        "creators": {
          "available": 7,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/60610/creators",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/11680",
              "name": "Gerry Duggan",
              "role": "writer"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/9081",
              "name": "Matteo Lolli",
              "role": "penciler"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/12392",
              "name": "David Lopez",
              "role": "inker (cover)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/13008",
              "name": "Ruth Redmond",
              "role": "colorist"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/12974",
              "name": "Vc Joe Sabino",
              "role": "letterer"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/8230",
              "name": "Christian Dalla Vecchia",
              "role": "inker"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/creators/8822",
              "name": "Jordan White",
              "role": "editor"
            }
          ],
          "returned": 7
        },
        "characters": {
          "available": 1,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/60610/characters",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009268",
              "name": "Deadpool"
            }
          ],
          "returned": 1
        },
        "stories": {
          "available": 2,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/60610/stories",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/131689",
              "name": "cover from Deadpool (2015) #36",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/131690",
              "name": "story from Deadpool (2015) #36",
              "type": "interiorStory"
            }
          ],
          "returned": 2
        },
        "events": {
          "available": 1,
          "collectionURI": "http://gateway.marvel.com/v1/public/comics/60610/events",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/336",
              "name": "Secret Empire"
            }
          ],
          "returned": 1
        }
      }
    ]
  }
}
class App extends Component {
  render() {

    return (
      <List results={comicData.data.results} />
    );
  }
}

export default App;
