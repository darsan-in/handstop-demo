const { encode } = require("handstop");

const videoPath = "sample/FaceRecon.mp4";
const outputPath = "test/a.mp4";
const codecType = "mx265";
const encodeLevel = 1;

encode(videoPath, outputPath, codecType, encodeLevel)
  .then(() => {
    console.log("success");
  })
  .catch((err) => {
    console.log(err.message);
  });
