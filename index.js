const path = require("path");
const bodyParser = require("body-parser");
const app = require("express")();
const Chatkit = require("pusher-chatkit-server");

const chatkit = new Chatkit.default(
  require({
    instanceLocator: "PUSHER_CHATKIT_INSTANCE_LOCATOR",
    key: "PUSHER_CHATKIT_KEY"
  })
);
