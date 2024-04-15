// Specify the URL of the JSON file
const url ='./data.json';
// Function to format and return the cryptocurrency information
function getCryptocurrencyInfo(data) {
  let cryptocurrencyInfo = "";
  cryptocurrencyInfo += `<h2>Cryptocurrency:</h2>`;
  cryptocurrencyInfo += `<p><strong>Description:</strong> ${data.crypto_information.cryptocurrency.description}</p>`;
  cryptocurrencyInfo += `<p><strong>Benefits:</strong></p>`;
  cryptocurrencyInfo += `<ul>`;
  data.crypto_information.cryptocurrency.benefits.forEach((benefit) => { // loops through cryptocurrency benefits
    cryptocurrencyInfo += `<li>${benefit}</li>`; // called the data
  });
  cryptocurrencyInfo += `</ul>`;
  cryptocurrencyInfo += `<p><strong>Types:</strong></p>`;
  cryptocurrencyInfo += `<ul>`;
  data.crypto_information.cryptocurrency.types.forEach((type) => { // loops through the types
    cryptocurrencyInfo += `<li><strong>${type.name}:</strong> ${type.description}</li>`; // called the data
  });
  cryptocurrencyInfo += `</ul>`;
  return cryptocurrencyInfo;
}

// Function to format and return the blockchain information
function getBlockchainInfo(data) {
  let blockchainInfo = "";
  blockchainInfo += `<h2>Blockchain:</h2>`;
  blockchainInfo += `<p><strong>Description:</strong> ${data.crypto_information.blockchain.description}</p>`;
  blockchainInfo += `<p><strong>Benefits:</strong></p>`;
  blockchainInfo += `<ul>`;
  data.crypto_information.blockchain.benefits.forEach((benefit) => { // loop through blockchain benefits
    blockchainInfo += `<li>${benefit}</li>`; // called the data
});
blockchainInfo += `</ul>`;
blockchainInfo += `<p><strong>Types:</strong></p>`;
blockchainInfo += `<ul>`;
data.crypto_information.blockchain.types.forEach((type) => { // loops through blockchain types
  blockchainInfo += `<li><strong>${type.name}:</strong> ${type.description}</li>`; // called the data
});
blockchainInfo += `</ul>`;
return blockchainInfo;
}

// Function to format and return the other topics information
function getOtherTopicsInfo(data) {
  let otherTopicsInfo = "";
  otherTopicsInfo += `<h2>Other Topics:</h2>`;
  otherTopicsInfo += `<ul>`;
  data.crypto_information.other_topics.forEach((topic) => { // Loop through other topics
      otherTopicsInfo += `<li><strong>${topic.name}:</strong> ${topic.description}</li>`; // called the data
      otherTopicsInfo += `<p><strong>Benefits:</strong></p>`;
      otherTopicsInfo += `<ul>`;
      topic.benefits.forEach((benefit) => { // loops benefits 
          otherTopicsInfo += `<li>${benefit}</li>`; // called the data
      });
      otherTopicsInfo += `<br>`
      otherTopicsInfo += `</ul>`;
  });
  otherTopicsInfo += `</ul>`;
  return otherTopicsInfo;
}
fetch(url) // fetching the data.json file
    .then((response) => { // If the computer gets the file successfully, this part of the code checks if everything is okay with the file. If it's not okay (ie: if the file doesn't exist), it will stop and show an error message
        if (!response.ok) { // if the response fails then using throw new Error displays the error
            throw new Error(`There is a HTTP ERROR!!!! status: ${response.status}`);
        }
        return response.json(); // Convert the response to a JSON object
    })
    .then((data) => { // If everything is okay, this part of the code reads the file's data and displays it in the console
        console.log(data); // displays data.json to console

        // Displays Crypto information to console
        const rawCryptoData = data.crypto_information;
        console.log(rawCryptoData);

        // Call the functions and make them const(thought const would be better than let or var) to get the display information
        const dspCryptocurrencyInfo = getCryptocurrencyInfo(data);
        const dspBlockchainInfo = getBlockchainInfo(data);
        const dspOtherTopicsInfo = getOtherTopicsInfo(data);

        // Display the dsp information in HTML elements to console
        console.log(dspCryptocurrencyInfo);
        console.log(dspBlockchainInfo);
        console.log(dspOtherTopicsInfo);
       
        document.getElementById(`cryptocurrencyInfo`).innerHTML = dspCryptocurrencyInfo;
        document.getElementById(`blockchainInfo`).innerHTML = dspBlockchainInfo;
        document.getElementById(`otherTopicsInfo`).innerHTML = dspOtherTopicsInfo;
    })
    .catch((error) => {
        console.log(`Error reading the JSON file:`, error); // gets called if there is an error reading the json file. There isn't an error. I checked!
    })