import logger   from '../utils/stackr23-logger/index.js'
import {emojiConfigFake} from '../dist/extendGitmoji.js'
import {extendGitmoji} from '../dist/index.js'

// TBD: add @stackr23/logger
logger.debug("typeof extendGitmoji'\n")
console.log(typeof extendGitmoji)

const extendedGitmoji = extendGitmoji(emojiConfigFake.gitmojis)
logger.debug("extended extendGitmoji'\n")
console.log(extendedGitmoji)
