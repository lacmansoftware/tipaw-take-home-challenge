# Tipaw-Take-Tome-Thallenge
## What's this?
This is simple code challenge for JavaScript Developer in Tipaw.
You can check description [here](https://github.com/Tipaw-tech/take-home-challenge#readme)
## Development Environment
### Initial set-up/install
- Node.js
- MongoDB
- Git
- Any code editor (e.g. Visual Studio Code, Atom Editor, Notepad ++)
### Installing dev environment
- Clone from github
```console
$ git clone https://github.com/lacmansoftware/tipaw-take-home-challenge.git
```
- Install backend node.js modules
```console
$ cd backend
$ npm install
```
- Install frontend node.js modules
```console
$ cd frontend
$ npm install
```
### Running dev 
- Run backend
```console
$ cd backend
$ npm start
```
- Run frontend
```console
$ cd frontend
$ npm start
```
### .env
You can add .env file to change configuration in backend and frontend.
- backend
```console
MONGODB_URI="<YOUR-MONGODB-URL>"
FRONTEND_ENDPOINT="<FRONTEND-ENDPOINT>"
PORT="<PORT-NUMBER>"
```
- frontend
```console
# development
API_AUTH_ENDPOINT=<YOUR-API-AUTH-ENDPOINT>

# production
# API_AUTH_ENDPOINT=<YOUR--API-AUTH-ENDPOINT-IN-PRODUCTION>
```
