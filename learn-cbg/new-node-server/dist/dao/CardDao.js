"use strict";

const Sql = require('./Sql.js');

module.exports = class CardDao extends Sql {
  constructor() {
    super('card');
  }

};