# @stackr23/gitmoji-conventional-commits 
> __add gitmojis to conventional commit messages__

[![PRs Welcome][pr-welcome]](http://makeapullrequest.com)
[![Maintenance][maintenance-img]][maintenance-url]
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)
[![GitMoji][gitmoji-img]][gitmoji-url]

<!-- badge urls - colors: #44CC11, #FFDD67, #FF5A79 -->

[gitmoji-img]: https://img.shields.io/badge/%F0%9F%98%BB-gitmoji-FFDD67.svg?style=flat-square?style=flat-square  
[gitmoji-url]: https://gitmoji.carloscuesta.me  
[maintenance-img]: https://img.shields.io/badge/Maintained%3F-yes-green.svg
[maintenance-url]: https://GitHub.com/stackR23/react23/graphs/commit-activity
[pr-welcome]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
<!-- /badge urls -->

## v2

```javascript
import {extendGitmoji}  from '@stackr23/gitmoji-conventional-commits'
const extendedConfig    = extendGitmoji(GITMOJI/DATA/GITMOJI.json)
```

__detailed specification of conventional-commits:__  
https://www.conventionalcommits.org/en/v1.0.0-beta.2/

__extended type definitions are stated by angular__  
https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#type

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

## [proposal] [conventionalcommits](https://www.conventionalcommits.org/) - [gitmoji](https://gitmoji.carloscuesta.me/)
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


