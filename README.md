# AirCollections
World's first metaverse livestream commerce platform for NFTs.

AirCollections connects NFT creators with collectors and buyers in a video livestreaming experience in metaverse. NFT collectors and buyers can interact and purchase NFTs during and after the live video show in metaverse.

# Technologies used
AirCollections is built using Solana Media Network livestreaming technology, Mozilla Hubs, IPFS and Node.js

# To setup AirCollections
1. cd code
2. npm install -g yarn
3. npm install
4. npm run serve

# To setup airCollections-sol-wallet-adapter
1. git clone https://github.com/georgesmith9914/aircollections-sol-wallet-adapter.git
2. Run "yarn" in root folder
3. Run "yarn" in example folder
4. Run "yarn start" in example folder

# Apache proxypass entries
    ProxyPreserveHost On
    ProxyPass /ac http://0.0.0.0:9011/src
    ProxyPassReverse /ac http://0.0.0.0:9011/src

    ProxyPreserveHost On
    ProxyPass /backend http://0.0.0.0:3000
    ProxyPassReverse /backend http://0.0.0.0:3000
