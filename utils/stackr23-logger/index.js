import chalk from './chalkExt'

export const chalkExt = chalk

export default new class Logger {

    defaults = {prefix: '{yellow [StackR23]}'}

    constructor(args) {}

    logArgs (...output) {
        console.log(...output)
    }

    log (str, typePrefix, styleType, styleString) {
        const prefix = this.defaults.prefix

        if (arguments.length === 1) {
            console.log(chalkExt`{bold ${this.defaults.prefix}} ${str}`)

            return true
        }

        console.log(chalkExt`{${styleType} {bold ${this.defaults.prefix} ${typePrefix}:} {${styleString} ${str}}}`)

        return true
    }

    debug   = (str) => this.log(str, 'DEBUG',   'cyanBright',           'cyan')
    error   = (str) => this.log(str, 'ERROR',   'redBright.bgBlack',    'red')
    success = (str) => this.log(str, 'SUCCESS', 'greenBright',          'green')

}
