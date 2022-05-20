# Simple Health Endpoint

This is a simple health endpoint using NodeJS and Express

## Requirements
- NodeJS 18
- Docker

## Setup project :wrench:
Add the environment variable file called `.env`.
```
cp .env.example .env
```
Edit the file `.env` adding the port number in the variable
```
PORT=3000
```
Then run:
```
npm install
```
This will install all the project dependencies.

## Run the application locally :computer:
To execute the application in a local environment
```
npm run start
```
or
```
node index.js
```

## Run the application using Docker :whale: 
Build the image
```
docker build . -t simple-health-endpoint
```
Execute the container exposing the port 80 on the localhost
```
docker run -p 80:3000 -d simple-health-endpoint
```

## Test the application
### Locally
```
curl http://localhost:3000/health
```
### Docker
```
curl http://localhost/health
```
This must return an `Ok` and a `200` HTTP code.
