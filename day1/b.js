fs = require("fs");

const file = fs.readFile("./input.txt", "utf8", (err, data) => {
  const elvesInventory = data.split("\n\n");
  //   console.log(elvesInventory);

  const caloriesList = [];
  elvesInventory.forEach((val) => {
    let caloriesSplited = val.split("\n");
    let count = 0;
    caloriesSplited.forEach((calories) => {
      count += parseInt(calories);
    });

    caloriesList.push(count);
  });
  caloriesList.sort();
  caloriesList.reverse();
  console.log(caloriesList);
  //   console.log(caloriesList[-1], caloriesList[-2], caloriesList[-3]);
  console.log(typeof caloriesList);
});
