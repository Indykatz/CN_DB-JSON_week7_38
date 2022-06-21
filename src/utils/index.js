// File sync
const fs = require("fs");

const addFilm = (filmObj) => {
  try {
    // We use JSON.stringify to turn bject into string
    const stringyObj = JSON.stringify(filmObj);
    // we use file sync package "fs" to create a file called storage.jsom
    // and add what ever dat we into out terimal
    fs.writeFileSync("./storage.json", stringyObj);
    // catch any errors in try block
  } catch (error) {
    console.log(error);
  }
};

const listFilms = () => {
  try {
    // we use file sync "fs" and the built in filesync to read the data on the file
    const filmList = fs.readFileSync("./storage.json");
    const list = JSON.parse(filmList);
    console.log(list);
  } catch (error) {
    console.log(error);
  }
};
// export functions to use in add.js
module.exports = { addFilm, listFilms };
