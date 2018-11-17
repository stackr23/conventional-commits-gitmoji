import logger from '@stackr23/logger'

import {mappedConfig} from './extendGitmoji.js'

export const addGitmoji = () => {
    // will be used for git-cz, commitlint, changelog, usw
}

// tbd: replace body
export const addCCPrefix = (commitMsg, emoji) => {

}

export const gitMojiToCC = ({name, emoji}, extendedConfig) => {
    logger.debug('gitMojiToCC -> emojiObject .name and .emojiSS')
    console.log({name, emoji})

    logger.debug('extendedConfig')
    console.log(mappedConfig)

    let emojiExtended = mappedConfig[name],
        prefix, titlePrefix

    if (emojiExtended == null) {
        return emoji
    }

    prefix = emojiExtended.cc_prefix

    if (prefix == null) {
        return emoji
    }

    titlePrefix = prefix + ': ' + emoji + ' '

    return titlePrefix
}
