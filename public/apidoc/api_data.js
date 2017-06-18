define({ "api": [
  {
    "type": "delete",
    "url": "/api/danhngon/:id",
    "title": "Remove a danhngon",
    "version": "1.0.0",
    "group": "Danhngon",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "id",
            "optional": false,
            "field": "_id",
            "description": "<p>danhngon id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Delete error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "filename": "./server.js",
    "groupTitle": "Danhngon",
    "name": "DeleteApiDanhngonId"
  },
  {
    "type": "get",
    "url": "/api/danhngon",
    "title": "List all danhngon",
    "version": "1.0.0",
    "group": "Danhngon",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "danhngon",
            "description": "<p>Danhngon's list</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "danhngon._id",
            "description": "<p>danhngon id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "danhngon.content",
            "description": "<p>danhngon content</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "danhngon.author",
            "description": "<p>danhngon author</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "danhngon.language",
            "description": "<p>danhngon language</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "danhngon.created_at",
            "description": "<p>Register's date</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n[{\n  \"_id\": 594634907c371c3e209e3446,\n  \"content\": \"A smile is the universal welcome.\",\n  \"author\": \"Max Eastman\",\n  \"language\": \"en\",\n  \"created_at\": \"2017-06-18T08:06:40.926Z\"\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "filename": "./server.js",
    "groupTitle": "Danhngon",
    "name": "GetApiDanhngon"
  },
  {
    "type": "get",
    "url": "/api/danhngon/:id",
    "title": "Find a danhngon with id",
    "version": "1.0.0",
    "group": "Danhngon",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "_id",
            "description": "<p>danhngon id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "danhngon._id",
            "description": "<p>danhngon id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "danhngon.content",
            "description": "<p>danhngon content</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "danhngon.author",
            "description": "<p>danhngon author</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "danhngon.language",
            "description": "<p>danhngon language</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "danhngon.created_at",
            "description": "<p>Register's date</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n  \"_id\": 594634907c371c3e209e3446,\n  \"content\": \"A smile is the universal welcome.\",\n  \"author\": \"Max Eastman\",\n  \"language\": \"en\",\n  \"created_at\": \"2017-06-18T08:06:40.926Z\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "danhngon not found",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        },
        {
          "title": "Find error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "filename": "./server.js",
    "groupTitle": "Danhngon",
    "name": "GetApiDanhngonId"
  },
  {
    "type": "get",
    "url": "/api/danhngon/random",
    "title": "Find a random danhngon",
    "version": "1.0.0",
    "group": "Danhngon",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "danhngon._id",
            "description": "<p>danhngon id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "danhngon.content",
            "description": "<p>danhngon content</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "danhngon.author",
            "description": "<p>danhngon author</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "danhngon.language",
            "description": "<p>danhngon language</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "danhngon.created_at",
            "description": "<p>Register's date</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n  \"_id\": 594634907c371c3e209e3446,\n  \"content\": \"A smile is the universal welcome.\",\n  \"author\": \"Max Eastman\",\n  \"language\": \"en\",\n  \"created_at\": \"2017-06-18T08:06:40.926Z\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "danhngon not found",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        },
        {
          "title": "Find error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "filename": "./server.js",
    "groupTitle": "Danhngon",
    "name": "GetApiDanhngonRandom"
  },
  {
    "type": "get",
    "url": "/api/danhngon/random/:language",
    "title": "Find a random translated danhngon",
    "version": "1.0.0",
    "group": "Danhngon",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "language",
            "description": "<p>language to translate to (in ISO code e.g. &quot;vi&quot;)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "danhngon._id",
            "description": "<p>danhngon id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "danhngon.content",
            "description": "<p>danhngon content</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "danhngon.author",
            "description": "<p>danhngon author</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "danhngon.language",
            "description": "<p>danhngon language</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "danhngon.created_at",
            "description": "<p>Register's date</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n  \"_id\": 594634907c371c3e209e3446,\n  \"content\": \"Một nụ cười là sự chào đón phổ quát.\",\n  \"author\": \"Max Eastman\",\n  \"language\": \"en\",\n  \"created_at\": \"2017-06-18T08:06:40.926Z\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "danhngon not found",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        },
        {
          "title": "Find error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "filename": "./server.js",
    "groupTitle": "Danhngon",
    "name": "GetApiDanhngonRandomLanguage"
  },
  {
    "type": "post",
    "url": "/api/danhngon",
    "title": "Register a new danhngon",
    "version": "1.0.0",
    "group": "Danhngon",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>danhngon content</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "author",
            "description": "<p>danhngon author</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "language",
            "description": "<p>danhngon language</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"content\": \"A smile is the universal welcome.\",\n  \"author\": \"Max Eastman\",\n  \"language\": \"en\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "_id",
            "description": "<p>danhngon id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>danhngon content</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "author",
            "description": "<p>danhngon author</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "language",
            "description": "<p>danhngon language</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "created_at",
            "description": "<p>Register date</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n  \"_id\": 594634907c371c3e209e3446,\n  \"content\": \"A smile is the universal welcome.\",\n  \"author\": \"Max Eastman\",\n  \"language\": \"en\",\n  \"created_at\": \"2017-06-18T08:06:40.926Z\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Register error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "filename": "./server.js",
    "groupTitle": "Danhngon",
    "name": "PostApiDanhngon"
  },
  {
    "type": "put",
    "url": "/api/danhngon/:id",
    "title": "Update a danhngon",
    "version": "1.0.0",
    "group": "Danhngon",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "id",
            "optional": false,
            "field": "_id",
            "description": "<p>danhngon id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>danhngon content</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "author",
            "description": "<p>danhngon author</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "language",
            "description": "<p>danhngon language</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"_id\": 594634907c371c3e209e3446,\n  \"content\": \"A smile is the universal welcome.\",\n  \"author\": \"Max Eastman\",\n  \"language\": \"en\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n  \"_id\": 594634907c371c3e209e3446,\n  \"content\": \"A smile is the universal welcome.\",\n  \"author\": \"Max Eastman\",\n  \"language\": \"en\",\n  \"created_at\": \"2017-06-18T08:06:40.926Z\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Register error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "filename": "./server.js",
    "groupTitle": "Danhngon",
    "name": "PutApiDanhngonId"
  }
] });