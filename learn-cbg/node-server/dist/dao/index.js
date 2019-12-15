"use strict";

var StudentDao = require('./StudentDao.js');

var CardDao = require('./CardDao.js');

var UserDao = require('./UserDao.js');

var SuperDao = require('./SuperDao.js');

module.exports = {
  StudentDao: StudentDao,
  CardDao: CardDao,
  UserDao: UserDao,
  SuperDao: SuperDao
};