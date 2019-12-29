/**
 * 为私有js库添加声明
 */
import log from './log.js'

interface Logger {
  i(msg: string): void
}
const logger: Logger = log

export default logger