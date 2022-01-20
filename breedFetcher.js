const request = require("request");
const fs = require("fs");

// API url:
// https://api.thecatapi.com/v1/breeds/search

const url = "https://api.thecatapi.con/v1/breeds/search/?q=";
// const input = process.argv.slice(2);

const fetchBreedDescription = function(catBreed, callback) {
  request(
    url + catBreed, //website user requests
    (error, response, body) => {
      if (error) {
        // console.log("ERROR:", error);
        callback(error, null)
      }
      //convert to an object
      const data = JSON.parse(body);
      const breed = data[0];
      if (breed) {
        callback(null, breed.description);
        // return breed.description;
        } 
        callback(null, `Breed not found:`)          
    }
  );  
};

module.exports = { fetchBreedDescription };

// const fetcher = (url, catBreed) => {

// };

// fetcher("https://api.thecatapi.com/v1/breeds/search/?q=", input[0]);