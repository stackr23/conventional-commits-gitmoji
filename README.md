# @stackr23/gitmoji-conventional-commits 
> __add gitmojis to conventional commit messages__

[![Build Status](https://travis-ci.com/stackr23/gitmoji-conventional-commits.svg?branch=master)](https://travis-ci.com/stackr23/gitmoji-conventional-commits)
[![Greenkeeper badge](https://badges.greenkeeper.io/stackr23/gitmoji-conventional-commits.svg)](https://greenkeeper.io/)
[![Maintenance][maintenance-img]][maintenance-url]
[![PRs Welcome][pr-welcome]](http://makeapullrequest.com)<br />
[![npm version](https://img.shields.io/npm/v/%40stackr23%2Fgitmoji-conventional-commits.svg)](http://npm.im/@stackr23/gitmoji-conventional-commits)
[![Conventional Commits](https://img.shields.io/badge/✔-Conventional%20Commits-blue.svg)](https://conventionalcommits.org) 
[![Semantic Versioning][semantic-img]][semantic-url]
[![GitMoji][gitmoji-img]][gitmoji-url]


<!-- badge urls -->
[gitmoji-img]: https://img.shields.io/badge/%F0%9F%98%BB-gitmoji-F2BF00.svg
[gitmoji-url]: https://gitmoji.carloscuesta.me  
[maintenance-img]: https://img.shields.io/badge/Maintained-yes-brightgreen.svg
[maintenance-url]: https://GitHub.com/stackR23/react23/graphs/commit-activity
[pr-welcome]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg
[semantic-img]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-blue.svg
[semantic-url]: https://semver.org/
<!-- /badge urls -->

## v3

__gitMojiToCC__  
> __TBD - atm just returns the input value to be stable__  

```javascript
import {gitMojiToCC}  from '@stackr23/gitmoji-conventional-commits'
const emoji           {name: 'zap', emoji: ':zap:'}
const prefixedGitmoji = gitMojiToCC({name, emoji})
console.log(prefixedGitmoji)
// => 'perf(:zap:):'
```

__TBD - advanced format__
* [ ] use scope if added - `fix(<scope>): 🐛`
    * add scope to promots.gitmoji

__extendGitmoji__  
```javascript
import {extendGitmoji}  from '@stackr23/gitmoji-conventional-commits'
const extendedConfig    = extendGitmoji(GITMOJI/DATA/GITMOJI.json)
```
__adds found `cc_prefix` to gitmoji objects for later usage__

## relation table  

| commit type          | prefix | gitmoji    | versioning |
|--------------------- |--------|------------|------------|
| __bug fix__          | fix:      | :bug:              | patch      |
| __feature__          | feat:     | :sparkles:         | minor      |
| __breaking change__  | fix:      | :boom:             | major      |
| chore tasks          | chore:    | __???__            | —          |
| documentation        | doc:      | :memo:             | —          |
| styling              | style:    | :lipstick:         | —          |
| refactor             | refactor: | :recycle:          | —          |
| performance          | perf:     | :zap:              | —          |
| tests                | test:     | :white_check_mark: | —          |
| without topic rel    | —         | favicon            | —          |

> __TBC__


__detailed specification of conventional-commits:__  
https://www.conventionalcommits.org/en/v1.0.0-beta.2/

__extended type definitions are stated by angular__  
https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#type

## plugin PROPOSAL [conventionalcommits](https://www.conventionalcommits.org/) - [gitmoji](https://gitmoji.carloscuesta.me/)
suffix "structural elements" with gitmojis
`fix(header): #33 header menu open()` => `fix(header): :bug: #33 header menu open()`
* create git-hook 
* integrations / usage
  * standalone raw parser -> extendGitmoji()
* plugin integration
    * gitmoji-cli
    * [conventional-changelog](https://github.com/conventional-changelog/conventional-changelog)
    * commitizien
    * [semantic-release](https://github.com/semantic-release/semantic-release)
    * ...

## other conventional-commit tools
> should be considered into compatibility specations of @stackr23/gitmoji-conventional-commits

* [semantic-release](https://github.com/semantic-release/semantic-release)  
* commitlint / [@commitlint/config-conventional](https://www.npmjs.com/package/@commitlint/config-conventional)  
* [conventional changelog](https://github.com/conventional-changelog/conventional-changelog)  


