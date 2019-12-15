/**
 * 1、定义一个命名空间时只能在ts文件内定义
 * 2、引用命名空间的语法 /// <reference path="../types/logger.ts"/>
 * 3、在引入命名空间的模块内就可以使用当前的声明了。比如： LoggerJs.EntryType、LoggerJs.EntryType 
 */
declare namespace  LoggerJsNamespace {
    export enum EntryType {Error, Warning, Info}

    export interface Entry {
        message: string,
        type?: EntryType
    }

    export interface logger {
        (entry: Entry) : void
    }
}

// declare let logger: LoggerJsNamespace.logger
