'use strict';

const {HELP_MESSAGE} = require(`../../constants`);

module.exports = {
  name: `--help`,
  run() {
    console.info(HELP_MESSAGE);
  }
};
