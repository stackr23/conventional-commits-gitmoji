import logger   from '../utils/stackr23-logger/index.js'
import extendGitmoji, {
    emojiConfigFake
} from '../dist/extendGitmoji.js'

// TBD: add @stackr23/logger
logger.debug("typeof extendGitmoji'\n")
console.log(typeof extendGitmoji)

const extendedGitmoji = extendGitmoji(emojiConfigFake)
logger.debug("extended extendGitmoji'\n")
console.log(extendedGitmoji)
