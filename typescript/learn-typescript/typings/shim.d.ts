// declare  interface MyDate {
// 	format(date: string): string,
// 	getTime(): number
// } 

declare module shim {
	export interface DateUtil {
		format(date: string): string,
		getTime(): number
	} 
}