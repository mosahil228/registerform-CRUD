<h1 align="center">
🌐 Ecommerce Application(Buyer/Seller)
</h1>
<p align="center">
MongoDB, Expressjs, React/ContextAPi, Nodejs
</p>





## clone or download
```terminal
$ git clone https://github.com/mosahil228/ecomApp.git
$ git Repo https://github.com/mosahil228/ecomApp

```

# Usage (run Buyer/Seller app on your machine)


notice, you need client and server runs concurrently in different terminal session, in order to make them talk to each other

## Client-side usage(PORT: 3000)
```terminal
$ cd client          // go to client folder
$ yarn # or npm i    // npm install packages
$ npm start        // run it locally

// deployment for client app
$ npm run build // this will compile the react code using webpack and generate a folder called docs in the root level
$ npm run start // this will run the files in docs, this behavior is exactly the same how gh-pages will run your static site
```

## Server-side usage(PORT: 8080)

### Prepare your secret

run the script at the first level:

(You need to add a 
   PORT = 8080
   MONGO_URL={your url}
   JWT_SECRET={your-secret-jwt}
   BRAINTREE_MERCHANT_ID={your-merchant-id}
   BRAINTREE_PUBLIC_KEY={your-public-key}
   BRAINTREE_PRIVATE_KEY={your-private-key}

      in .env to connect to MongoDB and payment gateway)

```terminal
// in the root level of backend (server) direct install:
$ npm install /  npm run server -> to run the server

```

### Start

```terminal
$ npm install  // server file is already in root folder 
$ npm i       // npm install packages
$ npm run server // run it locally

```


## Author
[mosahil228](https://codewithsahil.netlify.app/)


