# Ethereum To Polygon Bridge Dapp

<img src="https://user-images.githubusercontent.com/47485188/126107989-729175ff-7a2b-481c-ae2d-113e71d8c41f.png"> </img>

## Setup & Installation
1. Install the dependencies in the package
```
npm i
```
2. Sign in to [Infura](https://infura.io/), create a new project, copy your project id and put it into the "infuraId" constant in the config.js file.<br>
<img src="https://user-images.githubusercontent.com/47485188/126146427-cc183c41-f50f-499f-bee8-ed2407b62e86.png"></img>

3. Currently, I have added only 3 tokens for the mainnet (DAI, USDC, USDT). <br>
<img src="https://user-images.githubusercontent.com/47485188/126146871-ddcd76fa-8e70-4d31-9228-ef009aab82e8.png"></src><br>
To add more tokens, you will need the ethereum contract address & the polygon contract address for that token. Then add that to the tokenToAddressMap object in the config.js file (taking example from the image above). Also add "mainnet" list in the erc20Tokens object. 

To add the image for a token, add the png file to the public directory. Make sure to rename the file to the name of the token (token.png)