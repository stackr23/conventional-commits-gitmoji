<<<<<<< HEAD
import chalk from './chalkExt'

export const chalkExt = chalk

export default new class Logger {
=======
import chalkExt     from './chalkExt'

export class Logger {
>>>>>>> 4b99e68999ef7cfaad5a36c0cc00adf04ba06600

    defaults = {
        prefix:     '{yellow [StackR23]}'
    }

    constructor(args) {
        // TBD
    }

    logArgs (...output) {
        console.log(...output)
    }

    log (str, typePrefix, styleType, styleString) {
        const prefix = this.defaults.prefix

<<<<<<< HEAD
        if (arguments.length === 1) {
            console.log(chalkExt`{bold ${this.defaults.prefix}} ${str}`)

            return true
        }

=======
>>>>>>> 4b99e68999ef7cfaad5a36c0cc00adf04ba06600
        console.log(chalkExt`{${styleType} {bold ${this.defaults.prefix} ${typePrefix}:} {${styleString} ${str}}}`)

        return true
    }

    debug  = (str)   => this.log(str, 'DEBUG', 'cyanBright', 'cyan')

    error  = (str)   => this.log(str, 'ERROR', 'redBright.bgBlack', 'red')

    success = (str)   => this.log(str, 'SUCCESS', 'greenBright', 'green')

}
<<<<<<< HEAD
=======

export default (new Logger())
>>>>>>> 4b99e68999ef7cfaad5a36c0cc00adf04ba06600
