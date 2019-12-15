"use strict";

const Sql = require('./Sql.js');

module.exports = class StudentDao extends Sql {
  constructor() {
    super('student');
  }

};