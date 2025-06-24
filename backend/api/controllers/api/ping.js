module.exports = {
  friendlyName: "Ping",

  description: "Ping api.",

  inputs: {},

  exits: {},

  fn: async function (inputs) {
    // All done.
    return { message: "pong" };
  },
};
