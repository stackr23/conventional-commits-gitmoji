import logger from '@stackr23/logger'

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
    console.log(extendedConfig)

    return emoji
}
