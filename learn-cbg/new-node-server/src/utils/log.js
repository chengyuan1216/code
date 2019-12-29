const chalk = require('chalk')

export default {
  i(msg) {
    console.log(chalk.red(msg))
  },
  e() {
    console.log(msg)
  }
}