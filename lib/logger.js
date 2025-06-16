'use strict';

const { colors, dye } = require("./palette.js");
const { blue, green, red, yellow } = colors;
const intl = new Intl.DateTimeFormat(undefined,
  {
    year: "2-digit",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

const formatDate = (date = new Date()) => intl.format(date);
const date = () => dye(blue, formatDate());

const logger = Object.assign({}, console, {
  log(...logs) {
    const title = dye(green, "[log]:");
    console.log(title, date(), ...logs);
  },
  error(...logs) {
    const title = dye(red, "[error]:");
    console.log(title, date(), ...logs);
  },
  warn(...logs) {
    const title = dye(yellow, "[warn]:");
    console.log(title, date(), ...logs);
  },
  info(...logs) {
    const title = dye(blue, "[info]:");
    console.log(title, date(), ...logs);
  },
});

module.exports = Object.freeze(logger);
