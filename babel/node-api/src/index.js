import Person from './Person'
debugger

main()

async function main() {
    await new Promise((resolve) => {
        resolve()
    }).then(() => {
        console.log(new Person('zhangsan').toString())
    })
}