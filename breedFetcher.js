const request = require("request");
const fs = require("fs");

// API url:
// https://api.thecatapi.com/v1/breeds/search

const input = process.argv.slice(2);

const fetcher = (url, catBreed) => {
  request(
    url + catBreed, //website user requests
    (error, response, body) => {
      if (error) {
        console.log("ERROR:", error);
      }

      //convert to an object
      const data = JSON.parse(body);
      const breed = data[0];
      if (breed) {
        console.log(breed.description);
        return breed.description;
      }
      console.log(`Breed ${catBreed} not found`);
    }
  );
};

fetcher("https://api.thecatapi.com/v1/breeds/search/?q=", input[0]);
