const fs = require("fs");
const { convert } = require("./algorithms");

try {
  fs.readFile("./input.txt", "utf8", (err, data) => {
    if (err) {
      throw err;
    }
    data = convert(data);
    fs.writeFile("./output_callback.txt", data, (err) => {
      if (err) throw err;
      console.log("Saved!");
    });
  });
} catch (err) {
  console.log(err.message);
}
