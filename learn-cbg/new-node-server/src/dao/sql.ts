import { getPool } from '../config/mysql'

export async function exec(sql: string): Promise<Array<any>> {
  return getPool().execute(sql)
}
