const fs = require("fs");
const { convert } = require("./algorithms");

const readFilePromise = (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, "utf8", (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
};

const writeFilePromise = (data, path = "./output_promise.txt") => {
  return new Promise((resolve, reject) => {
    fs.writeFile(path, data, (err) => {
      if (err) reject(err);
      console.log("Saved!");
      resolve();
    });
  });
};

readFilePromise("./input.txt")
  .then(convert)
  .then(writeFilePromise)
  .catch((err) => {
    console.log(err);
  });
