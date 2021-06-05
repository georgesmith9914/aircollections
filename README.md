# AirCollections
World's first livestream entertainment commerce platform for NFTs based on Solana Media Nework.

AirCollections connects NFT creators with collectors and buyers in a video livestreaming entertainment experience using Solana Media Network https://solana.com/ecosystem/medianetwork. NFT collectors can drop NFTs during live shows and buyers can interact and purchase NFTs during and after the live video show.

# Technologies used
AirCollections is built using Solana Media Network livestreaming technology https://solana.com/ecosystem/medianetwork, Solana SPL Token, IPFS and Node.js

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
