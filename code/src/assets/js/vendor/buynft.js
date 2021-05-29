function buyNFT(){
    console.log("Entered in buyNFT function..");
    
    console.log(web3);
    
    console.log(window.ethereum);
    console.log(window.web3);

    var params= [
        {
          from: ethereum.selectedAddress,
          to: '0x15a2AD79Cfe458A5BB2b061CCfc99426122Ac46a',
          gas: '0x76c0', // 30400
          gasPrice: '8000000000', // 10000000000000
          value: '02222000000000', // 299999000000000
        },
      ]
      
      ethereum
        .request({
          method: 'eth_sendTransaction',
          params,
        })
        .then((result) => {
          // The result varies by by RPC method.
          // For example, this method will return a transaction hash hexadecimal string on success.
          console.log(result);
          console.log("transfer to creator successful");
          document.getElementById("connectButton").innerHTML="Sold Out"
          openModal();
          //mint NFT
          var randomNumber = Math.floor(Math.random()*(999-100+1)+100);
          $.ajax({
            url: "http://localhost:4000/deployandmintnft?name=NFTLP" + randomNumber + "&symbol=" + "LP" + randomNumber +"&toaddress=" + ethereum.selectedAddress + "&tokenuri=" + "http://aircollections.com/" + randomNumber,
            success: function(result){
              console.log(result);
              $("a#etherscanurl").text("https://rinkeby.etherscan.io/address/" + result.contractAddress);
              $("a#etherscanurl").attr("href", "https://rinkeby.etherscan.io/address/" + result.contractAddress);
              $("#etherscan").text("");
            }
          });
          
        })
        .catch((error) => {
          // If the request fails, the Promise will reject with an error.
        });
    //transfer NFT to buyer

}

const getWeb3 = () => {
    return new Promise((resolve, reject) => {
      window.addEventListener("load", async () => {
        if (window.ethereum) {
          const web3 = new Web3(window.ethereum);
          try {
            // ask user permission to access his accounts
            await window.ethereum.request({ method: "eth_requestAccounts" });
            resolve(web3);
          } catch (error) {
            reject(error);
          }
        } else {
          reject("Must install MetaMask");
        }
      });
    });
  };

  var modal = document.getElementById("myModal");

  // Get the button that opens the modal
  var btn = document.getElementById("myBtn");
  
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];
  
  // When the user clicks on the button, open the modal
  btn.onclick = function() {
    modal.style.display = "block";
  }
  
  function openModal(){

      modal.style.display = "block";
    
  }
  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }