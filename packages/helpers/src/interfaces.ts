import {ModuleFormat} from './getPackageJson'

export type Env = 'production' | 'development'

export interface OutputOptions {
    sourcemap: boolean
    file: string
    format: ModuleFormat
    globals?: {[pkgName: string]: string}
    name?: string
}

export interface Config {
    external?: string[]
    input: string
    output: OutputOptions[]
}


export class HelpersError extends Error {
    constructor(message: string) {
        super(`@zerollup/helpers: ${new.target.name}: ${message}`)
    }
}
