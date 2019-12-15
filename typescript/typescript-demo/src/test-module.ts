/// <reference path="../types/logger.d.ts"/>
import logger, {Entry, EntryType} from '../lib/logger/index!logger'
//logger('hhh') //报错
let entry: Entry = {
    message: 'hello typescript!!',
    type: EntryType.Error
}
logger(entry)