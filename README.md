# file-metadata
Microservice to handle uploaded files metadata. Powered with Express, Mongoose and MongoDB. File upload with [Multer](https://www.npmjs.com/package/multer).

## Installation
```bash
$ git clone https://github.com/denisediniz/file-metadata.git
$ cd file-metadata
$ npm install
```

## Development
```bash
$ npm run dev
```

## Production
```bash
$ npm start
```

## Endpoints
- `/api/filemetadata` uploads a file and retrieves the file name and size in bytes within a JSON response