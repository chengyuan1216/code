import chalk from 'chalk'
export default {
    i(message: any){
        console.log(chalk.green('[info]'),message)
    },
    e(message: any){
        console.log(chalk.red('[error]'),message)
    },
    w(message: any){
        console.log(chalk.yellow('[warning]'),message)
    },
}