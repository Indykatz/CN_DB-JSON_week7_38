// yargs
const yargs = require("yargs");
// functions
const { addFilm, listFilms } = require("./utils/index");
// app function
const app = (yargsObj) => {
  if (yargsObj.add) {
    addFilm({ title: yargsObj.title, actor: yargsObj.actor });
  } else if (yargsObj.list) {
    listFilms();
  } else {
    console.log("Incorrect command");
  }
};

app(yargs.argv);
