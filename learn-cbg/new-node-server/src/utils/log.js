const chalk = require('chalk')

export default {
  info(msg) {
    console.log(chalk.green(msg))
  },
  error(msg) {
    console.log(chalk.red(msg))
  },
  success(msg) {
    console.log(chalk.green(msg))
  }
}