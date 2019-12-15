[TOC]



# 1、什么是NodeJS

JS是脚本语言，脚本语言都需要一个解析器才能运行。对于写在HTML页面里的JS，浏览器充当了解析器的角色。而对于需要独立运行的JS，NodeJS就是一个解析器。

每一种解析器都是一个运行环境，不但允许JS定义各种数据结构，进行各种计算，还允许JS使用运行环境提供的内置对象和方法做一些事情。例如运行在浏览器中的JS的用途是操作DOM，浏览器就提供了`document`之类的内置对象。而运行在NodeJS中的JS的用途是操作磁盘文件或搭建HTTP服务器，NodeJS就相应提供了`fs`、`http`等内置对象。

# 2、模块

编写稍大一点的程序时一般都会将代码模块化。在NodeJS中，一般将代码合理拆分到不同的JS文件中，每一个文件就是一个模块，而文件路径就是模块名。

在编写每个模块时，都有`require`、`exports`、`module`三个预先定义好的变量可供使用。

## 模块初始化

一个模块中的JS代码仅在模块第一次被使用时执行一次，并在执行过程中初始化模块的导出对象。之后，缓存起来的导出对象被重复利用。

```js
// moduleB
console.log('moduleB')
module.export = function () {
    console.error('hello')
}

// moduleA
var moduleB = require('./moduleB')
console.log('moduleA')
exports.b = moduleB

// index
var moduleA = require('./moduleA')
var moduleB = require('./moduleB')
console.log('index')
console.log(moduleA.b === moduleB)

输出：
moduleB
moduleA
index
true
```

## 主模块

通过命令行参数传递给NodeJS以启动程序的模块被称为主模块。主模块负责调度组成整个程序的其它模块完成工作。例如通过以下命令启动程序时，`main.js`就是主模块。

## 二进制模块

虽然一般我们使用JS编写模块，但NodeJS也支持使用C/C++编写二进制模块。编译好的二进制模块除了文件扩展名是`.node`外，和JS模块的使用方式相同。虽然二进制模块能使用操作系统提供的所有功能，拥有无限的潜能。

## 模块路径解析规则

1. 内置模块

   如果传递给`require`函数的是NodeJS内置模块名称，不做路径解析，直接返回内部模块的导出对象，例如`require('fs')`。

2. node_modules目录

   NodeJS定义了一个特殊的`node_modules`目录用于存放模块。例如某个模块的绝对路径是`/home/user/hello.js`，在该模块中使用`require('foo/bar')`方式加载模块时，则NodeJS依次尝试使用以下路径。

   ```
    /home/user/node_modules/foo/bar
    /home/node_modules/foo/bar
    /node_modules/foo/bar
   ```

3. NODE_PATH环境变量

   与PATH环境变量类似，NodeJS允许通过NODE_PATH环境变量来指定额外的模块搜索路径。NODE_PATH环境变量中包含一到多个目录路径，路径之间在Linux下使用`:`分隔，在Windows下使用`;`分隔。例如定义了以下NODE_PATH环境变量：

   ```
    NODE_PATH=/home/user/lib:/home/lib
   ```

   当使用`require('foo/bar')`的方式加载模块时，则NodeJS依次尝试以下路径。

   ```
    /home/user/lib/foo/bar
    /home/lib/foo/bar
   ```

## 包（package）

我们已经知道了JS模块的基本单位是单个JS文件，但复杂些的模块往往由多个子模块组成。为了便于管理和使用，我们可以把由多个子模块组成的大模块称做`包`，并把所有子模块放在同一个目录里。

在组成一个包的所有子模块中，需要有一个入口模块，**入口模块的导出对象被作为包的导出对象**。

### index.js

当模块的文件名是`index.js`，加载模块时可以使用模块所在目录的路径代替模块文件路径，因此接着上例，以下两条语句等价。

```
var cat = require('/home/user/lib/cat');
var cat = require('/home/user/lib/cat/index');
```

这样处理后，就只需要把包目录路径传递给`require`函数，感觉上整个目录被当作单个模块使用，更有整体感。

### package.json

如果想自定义入口模块的文件名和存放位置，就需要在包目录下包含一个`package.json`文件，并在其中指定入口模块的路径。

```
{
    "name": "cat",
    "main": "./lib/main.js"
}
```

如此一来，就同样可以使用`require('/home/user/lib/cat')`的方式加载模块。NodeJS会根据包目录下的`package.json`找到入口模块所在位置。

### NPM

NPM是随同NodeJS一起安装的包管理工具，能解决NodeJS代码部署上的很多问题，常见的使用场景有以下几种：

- 允许用户从NPM服务器下载别人编写的三方包到本地使用。
- 允许用户从NPM服务器下载并安装别人编写的命令行程序到本地使用。
- 允许用户将自己编写的包或命令行程序上传到NPM服务器供别人使用。

可以看到，NPM建立了一个NodeJS生态圈，NodeJS开发者和用户可以在里边互通有无

# 3、npm依赖包版本前的符号的意义

**版本的格式**

major.minor.patch

主版本号.次版本号.修补版本号

————————————————————

patch：修复bug，兼容老版本

minor：新增功能，兼容老版本

major：新的架构调整，不兼容老版本

————————————————————

**version**

必须匹配某个版本

如：1.1.2，表示必须依赖1.1.2版

 

**>version**

必须大于某个版本

如：>1.1.2，表示必须大于1.1.2版

 

**>=version**

可大于或等于某个版本

如：>=1.1.2，表示可以等于1.1.2，也可以大于1.1.2版本

 

**<version**

必须小于某个版本 

如：<1.1.2，表示必须小于1.1.2版本

 

**<=version**

可以小于或等于某个版本

如：<=1.1.2，表示可以等于1.1.2，也可以小于1.1.2版本

 

**~version**

大概匹配某个版本

如果minor版本号指定了，那么minor版本号不变，而patch版本号任意

如果minor和patch版本号未指定，那么minor和patch版本号任意

如：~1.1.2，表示>=1.1.2 <1.2.0，可以是1.1.2，1.1.3，1.1.4，.....，1.1.n 

如：~1.1，表示>=1.1.0 <1.2.0，可以是同上

如：~1，表示>=1.0.0 <2.0.0，可以是1.0.0，1.0.1，1.0.2，.....，1.0.n，1.1.n，1.2.n，.....，1.n.n

 

**^version**

兼容某个版本

版本号中最左边的非0数字的右侧可以任意

如果缺少某个版本号，则这个版本号的位置可以任意

如：^1.1.2 ，表示>=1.1.2 <2.0.0，可以是1.1.2，1.1.3，.....，1.1.n，1.2.n，.....，1.n.n

如：^0.2.3 ，表示>=0.2.3 <0.3.0，可以是0.2.3，0.2.4，.....，0.2.n

如：^0.0，表示 >=0.0.0 <0.1.0，可以是0.0.0，0.0.1，.....，0.0.n

 

**x-range**

x的位置表示任意版本

如：1.2.x，表示可以1.2.0，1.2.1，.....，1.2.n

 

***-range**

任意版本，""也表示任意版本

如：*，表示>=0.0.0的任意版本

 

**version1 - version2**

大于等于version1，小于等于version2

如：1.1.2 - 1.3.1，表示包括1.1.2和1.3.1以及他们件的任意版本

 

**range1 || range2**

满足range1或者满足range2，可以多个范围

如：<1.0.0 || >=2.3.1 <2.4.5 || >=2.5.2 <3.0.0，表示满足这3个范围的版本都可以

# 4、process（进程）

process是一个全局对象，即global对象的属性，可以在任何地方直接访问到它而无需引入额外模块。

## process.argv

获取命令行参数。值是一个数组：

```js
console.log(process.argv)
[ 'D:\\applications\\nodejs\\node.exe',
  'D:\\github\\learn\\nodejs\\code\\index.js',
  'a=12',
  'b=13',
  'c=14' ]
```

## process.execArgv

`process.execArgv` 属性返回当Node.js进程被启动时，Node.js特定的命令行选项。 这些选项在[`process.argv`](http://nodejs.cn/s/wNE2K1)属性返回的数组中不会出现，并且这些选项中不会包括Node.js的可执行脚本名称或者任何在脚本名称后面出现的选项。 这些选项在创建子进程时是有用的，因为他们包含了与父进程一样的执行环境信息。

```
console.log('process.execArgv', process.execArgv)
// process.execArgv [ '--inspect' ]
```

## process.execPath

开启当前进程的执行文件的绝对路径

```
console.log('process.execPath', process.execPath)
// process.execPath D:\applications\nodejs\node.exe
```

## process.env

获取当前系统环境信息的对象，常规可以用来进一步获取环境变量、用户名等系统信息。获取计算机系统内的环境变量，比如path等。

## process.version

获取当前node版本号

## process.versions

node以及其依赖包版本信息的属性

## process.pid

进程id

## process.arch

返回当前CPU的架构('arm'、'ia32' 或者 'x64')

## process.platform

运行程序所在的平台系统 'darwin', 'freebsd', 'linux', 'sunos' or 'win32'



## process.cwd()

`process.cwd()` 方法返回 Node.js 进程的当前工作目录。

```
console.log('当前目录是：', process.cwd())
// 当前目录是： D:\github\learn\nodejs\code
```

## process.chdir(directory)

改变当前工作进程的目录，如果操作失败抛出异常

```js
let log = console.log
log(process.cwd())
try {
    process.chdir('./dist')
    log(process.cwd())
} catch(e) {
    log('errors')
}
// D:\github\learn\nodejs\code
// D:\github\learn\nodejs\code\dist
```

## process.memoryUsage()

返回一个对象，它描述了Node进程的内存使用情况，其单位是bytes

```js
{ rss: 19460096,
  heapTotal: 6537216,
  heapUsed: 3854040,
  external: 8272 }
```

## process.uptime()

返回 Node 程序已运行的秒数

```
log(process.uptime())
setTimeout(() => {
    log(process.uptime())
}, 1000)
// 0.065
// 1.071
```

## process.hrtime()

返回当前的高分辨时间，形式为 [秒，纳秒] 的元组数组。它是相对于在过去的任意时间。该值与日期无关，因此不受时钟漂移的影响。主要用途是可以通过精确的时间间隔，来衡量程序的性能

```
log(process.hrtime())
setTimeout(() => {
    log(process.hrtime())
}, 1000)
[ 419756, 468116952 ]
[ 419757, 474640960 ]
```

process.kill(pid, [signal])

结束对应某pid的进程并发送一个信号（若没定义信号值则默认为'SIGTERM'）

```
process.kill(13520, 'SIGTERM');
```

## process.abort()

触发node的abort事件，退出当前进程

```
process.abort();
console.log('在输出这句话之前就退出了');
```

## process.exit([code])

终止当前进程并返回给定的code。如果省略了code，退出时会默认返回成功的状态码('success' code) 也就是0

```
process.exit();
console.log('在输出这句话之前就退出了');
```

### process.exitCode

　可以自定义退出进程时node shell捕获到的状态码（必须是正常结束进程或者使用process.exit()指令退出）

　　[注意]如果指明了 process.exit(code) 中退出的错误码 (code)，则会覆盖掉 process.exitCode 的设置

```
process.exitCode = 4;
process.exit();//[Finished in 0.2s with exit code 4]

process.exitCode = 4;
process.exit(2);//[Finished in 0.2s with exit code 2]
```



## process.stdout

一个指向标准输出流(stdout)的可写的流(Writable Stream)

```
process.stdout.write('hello')
// hello
```

## process.stderr

一个指向标准错误流(stderr)的 可写的流(Writable Stream)

```
//输出一行标准错误流，效果跟stdout没差[Finished in 0.2s]
process.stderr.write('输出一行标准错误流，效果跟stdout没差');
```

## process.stdin

一个指向标准输入流(stdin)的可读流(Readable Stream)。标准输入流默认是暂停(pause)的，所以必须要调用process.stdin.resume()来恢复(resume)接收

```
process.stdin.resume();
var a;
process.stdout.write('请输入a的值\n')
process.stdin.on('data', function(data) {
    process.stdout.write('输入值是：' + data + '\n')
    // 这里会一直监听输入值
})
```

## exit事件

当进程将要退出时触发。这是一个在固定时间检查模块状态（如单元测试）的好时机。需要注意的是 'exit' 的回调结束后，主事件循环将不再运行，所以计时器也会失效。

在执行完所有代码后将会触发exit事件。

```
process.on('exit', function() {
    // 设置一个延迟执行
    setTimeout(function() {
        console.log('主事件循环已停止，所以不会执行');
    }, 0);
    console.log('退出前执行');
});
```



```
process.on('exit', function() {
    // 设置一个延迟执行
    setTimeout(function() {
        console.log('主事件循环已停止，所以不会执行');
    }, 0);
    console.log('退出前执行');
});
setTimeout(function() {
    console.log('主事件循环即将停止');
}, 10000);
// 主事件循环即将停止
// 退出前执行
```



## uncaughtException事件

捕获那些没有try catch的异常错误

## SIGINT事件

捕获当前进程接收到的信号（如按下了 ctrl + c）

```
process.on('SIGINT', function(a, b, c) {
    console.log('收到信号',a, b, c)
})
console.log('试着按下 ctrl + C');
setTimeout(function() {
    console.log('end');
}, 50000);
```



## process.nextTick(callback）

process.nextTick()方法可以**在当前"执行栈"的尾部-->下一次Event Loop（主线程读取"任务队列"）之前**-->触发process指定的回调函数。也就是说，它指定的任务总是发生在所有异步任务之前，当前主线程的末尾。（nextTick虽然也会异步执行，但是不会给其他io事件执行的任何机会）

```
process.nextTick(function A() {
  console.log(1);
  process.nextTick(function B(){console.log(2);});
});

setTimeout(function C() {
  console.log(3');
}, 0)
// 1
// 2
// 3
```









































