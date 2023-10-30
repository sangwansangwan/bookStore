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

## 🐳 Optional: Docker Deployment
1. Build the docker image.
```bash
docker build -t myBookServer .
```
2. Run the docker container.
```bash
docker run -p 3000:3000 myBookServer
```
