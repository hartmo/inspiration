'use strict';

const Service = require ('egg').Service;

class indexService extends Service {
  async index(page = 1) {
    const data = await this.app.mysql.query('SELECT * FROM sys_user;');
    return data;
  }
}

module.exports = indexService;
