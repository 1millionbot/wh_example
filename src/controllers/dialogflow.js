"use strict";

const { WebhookAdapter } = require("dialogflow-nodejs-package");

const intents = require("../intents");

process.env.DEBUG = "dialogflow:debug";

const handler = async (req, res) => {
  console.info("Dialogflow Controller: receiveDialogflowMessage.");

  try {
    const webhookAdapter = new WebhookAdapter(req, res);
    let intentMap = new Map();

    intentMap.set("Try To Get Pokemon", intents.tryToGetPokemon);

    webhookAdapter.handleResponse(intentMap);
  } catch (error) {
    console.error({ error });

    return res.status(500).send({
      message: "The server can't process the request",
    });
  }
};

module.exports = {
  handler,
};
