const { encodeAll } = require("handstop");

const videos = ["sample/FaceRecon.mp4", "sample/11967728_1920_1080_60fps.mp4"];
const destPath = "encoded";
const codecType = "mx265";
const encodeLevel = 1;
const concurrency = 2;

encodeAll(videos, destPath, codecType, encodeLevel, concurrency)
  .then(() => {
    console.log("success");
  })
  .catch((err) => {
    console.log(err.message);
  });
