const https = require("https");
const fs = require("fs");

const MAX_ARRAY_COUNT = 10;
const destFolder = "./resources/data";
const Constants = {
  API_URL: "https://hacker-news.firebaseio.com",
  API: {
    NEWS: "/v0/newstories.json",
    TOP: "/v0/topstories.json",
    BEST: "/v0/beststories.json",
    ASK: "/v0/askstories.json",
    SHOW: "/v0/showstories.json",
    JOB: "/v0/jobstories.json"
  }
};

function retrieveData(path, item) {
  https
    .get(Constants.API_URL + path, res => {
      let rawData = "";
      res.on("data", chunk => {
        rawData += chunk;
      });
      res.on("end", () => {
        try {
          const parsedData = JSON.parse(rawData);

          if (item) {
            // ITEM
            fs.writeFileSync(`${destFolder}${path}`, rawData);
            if (parsedData.kids && parsedData.kids.length > 0) {
              parsedData.kids.forEach(function(id) {
                console.log(id);
                retrieveData(`/v0/item/${id}.json`, true);
              });
            }
          } else {
            // STORY
            const resultData = parsedData.slice(0, MAX_ARRAY_COUNT);
            fs.writeFileSync(
              `${destFolder}${path}`,
              JSON.stringify(resultData)
            );

            resultData.forEach(function(id) {
              retrieveData(`/v0/item/${id}.json`, true);
            });
          }
        } catch (e) {
          console.error(e, rawData);
        }
      });
    })
    .on("error", e => {
      console.error(e);
    });
}

for (var key in Constants.API) {
  retrieveData(Constants.API[key]);
}
