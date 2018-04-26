const Controller = require('egg').Controller;
class AppController extends Controller {
  async search() {
    console.log(1);
    await this.ctx.render('app/app.js', {
      url: this.ctx.url.replace(/\/app/, '')
    });
  }

}

module.exports = AppController;
