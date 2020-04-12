// 布尔值
let flg: boolean = false

// 数值
let age:number = 18
let height:number = 1.75

// 字符串
let name:string = '刘承源'

// 数组
let arr1:number[] = [1, 2, 3]
let arr2:Array<string> = ['js', 'ts']

// 元组
// 元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。
let tuple1:[string, number] = ['kk', 1]
tuple1[0].slice()
// tuple1[1].slice() // 类型“number”上不存在属性“slice”

// tuple1[0] = 123 // 不能将类型123分配给类型“string”
// tuple1[2] = undefined // Tuple type '[string, number]' of length '2' has no element at index '2'.

// 枚举
enum Color {red, green = 100, yellow}
let c1 = Color.red

// any
let a:any = 1
a = 'kkk'

// 类型断言