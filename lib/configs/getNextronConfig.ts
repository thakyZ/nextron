import fs from 'fs'
import path from 'path'
import { loadScriptFile } from './typescriptLoader'
import type { Configuration } from '../../types';

const cwd = process.cwd()

export const getNextronConfig = async (): Promise<Configuration> => {
  if (fs.existsSync(path.join(cwd, 'nextron.config.js')))
    return await loadScriptFile(path.join(cwd, 'nextron.config.js'))
  if (fs.existsSync(path.join(cwd, 'nextron.config.ts')))
    return await loadScriptFile(path.join(cwd, 'nextron.config.ts'))
  return {}
}
