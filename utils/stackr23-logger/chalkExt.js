import chalk   from 'chalk'

// no arrow function -> preserve context!
export default function (parts, ...substitutions) {
    var rawResults = []
    var cookedResults = []

    parts.forEach((v, i) => {
        rawResults.push(parts.raw[i])
        cookedResults.push(parts[i])
        if (i < substitutions.length) {
            rawResults.push(substitutions[i])
           cookedResults.push(substitutions[i])
        }
    })
    var chalkParts = [cookedResults.join('')]
    chalkParts.raw = [rawResults.join('')]

    return(chalk(chalkParts))
}
