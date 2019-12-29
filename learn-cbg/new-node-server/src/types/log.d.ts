declare interface ILogger {
  info(msg: string): void
  error(msg: string): void
  success(msg: string): void
}
// export default Logger