# Shortloop SDK for Node

`shortloop-node-test` provides client implementation of Shortloop SDK for express based Node applications.

## Requirements

Current SDK version requires Node v16 or higher.

## Installation

`shortloop-node-test` can be installed like any other npm package through `npm`:

```console
$ npm install shortloop-node-test
```
## Usage

1. Once the package is installed, you can import the library using import or require approach:

    ```import ShortloopSDK from 'shortloop-node-test'```
    <br/> OR <br/>
    ```const ShortloopSDK = require('shortloop-node-test')```


2. Initialize the sdk  
   Example:
    ```Node
    const app = express();
    const sdk = ShortloopSDK.init({
        url: 'http://localhost:8080',
        applicationName: 'test-service-node',
        loggingEnabled: true (optional),
    });
    app.use(express.json()); //any other middlewares
    app.use(sdk.capture());
    ```
   

#   s h o r t l o o p - s d k - n o d e 
 
 