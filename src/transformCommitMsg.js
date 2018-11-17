import {debug} from '@stackr23/logger'

export const addGitmoji = () => {
    // will be used for git-cz, commitlint, changelog, usw
}

// tbd: replace body
export const addCCPrefix = (commitMsg, emoji) => {

}

export const gitMojiToCC = ({name, emoji}, extendedConfig) => {
    debug('gitMojiToCC -> {name, emoji}')
    console.log({name, emoji})

    return emoji
}
