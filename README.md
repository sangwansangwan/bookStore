    # Express Server Setup and Run Guide

This README provides step-by-step instructions on how to set up and run an Express server.


### 🛠️ Prerequisites

```bash
node --version
npm --version
```
If not, download and install them from [Node.js official site](https://nodejs.org/en/download/current).

### 🚀 Quick Start
1. Clone the repository
```bash
https://github.com/sangwansangwan/bookStore.git
cd bookStore
```
2. Install depedencies
```bash
npm install
```
3. Run the server
```bash
npm run start
```

## -> API usage
1. Get all books list.
```bash
GET REQUEST :>
API ENDPOINT : http://3.111.39.240:3000/books
```
2. Get single book with ID
```bash
GET REQUEST :>
API ENDPOINT : http://3.111.39.240:3000/books/653faa243f2c72b46c3d46c5
API USAGE : http://3.111.39.240:3000/books/<book object_id>
```
3. Create a book
```bash
POST REQUEST :>
API ENDPOINT : http://3.111.39.240:3000/books/653faa243f2c72b46c3d46c5
BODY AS JSON :> {
    "title":"booktEST",
    "author":"Tester",
    "summary":"This is for test purpose"
}
```
4. Delete a book
```bash
DELETE REQUEST :>
API ENDPOINT :> http://3.111.39.240:3000/books/booktEST
API Explained :> http://3.111.39.240:3000/books/<book name>
```

## 🐳 Optional: Docker Deployment
1. Build the docker image.
```bash
docker build -t myBookServer .
```
2. Run the docker container.
```bash
docker run -p 3000:3000 myBookServer
```
