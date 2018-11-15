# @stackr23/gitmoji-conventional-commits 
> __add gitmojis to conventional commit messages__

[![PRs Welcome][pr-welcome]](http://makeapullrequest.com)
[![Maintenance][maintenance-img]][maintenance-url]
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)
[![GitMoji][gitmoji-img]][gitmoji-url]

<!-- badge urls - colors: #44CC11, #FFDD67, #FF5A79 -->

[gitmoji-img]: https://img.shields.io/badge/gitmoji-%20😻-FF5A79.svg?style=flat-square  
[gitmoji-img2]: https://img.shields.io/badge/%20🐛%20✨%20💥-gitmoji-FF5A79.svg?style=flat-square  
[gitmoji-url]: https://gitmoji.carloscuesta.me  
[maintenance-img]: https://img.shields.io/badge/Maintained%3F-yes-green.svg
[maintenance-url]: https://GitHub.com/stackR23/react23/graphs/commit-activity
[pr-welcome]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
<!-- /badge urls -->

__detailed specification of conventional-commits:__  
https://www.conventionalcommits.org/en/v1.0.0-beta.2/

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


## [proposal] [conventionalcommits](https://www.conventionalcommits.org/) - [gitmoji](https://gitmoji.carloscuesta.me/) hook  
* write npm plugin that creates a git-hook to prefix "structural elements" with gitmojis:  
  `fix: #33 header menu open()` => `:bug: fix: #33 header menu open()`
* integrations / usage
  * __git hook__ - just register hook and filter commit message  
  * __gitmoji-cli__ - see issue #2  
  * standalone raw parser  
    like in [conventional-changelog](https://github.com/conventional-changelog/conventional-changelog)'s sub-packages

## roadmap
* [ ] __1. - analyse [conventionalcommits](https://www.conventionalcommits.org/)__  
  * [ ] define type of plugin (middleware, plugin, ...?)  
  * as this feature is mainly related to gitmoji (more than to other packages),  
  it __should be named gitmoji-conventional(-commits)__  
  standalone hook __|__ conventionalcommits-plugin __|__ add gitmoji feature "replace" (not recommended)
* [ ] __2. - sync config with gitmoji__  
  * [ ] add "conventionalcommits.mapping.js" to gitmoji  
  ```javascript
  {':bug:': 'fix:',':memo:': 'doc:' {...otherRules} default: 'change:'}
  ```  
  (PR into gitmoji repo to keep synced with updates)  

* [ ] __3. - create commit hook to filter commit messages__  
  make a conventionalcommits feature, if not possible  

## other conventional-commit tools
> should be considered into compatibility specations of @stackr23/gitmoji-conventional-commits

* [semantic-release](https://github.com/semantic-release/semantic-release)  
* commitlint / [@commitlint/config-conventional](https://www.npmjs.com/package/@commitlint/config-conventional)  
* [conventional changelog](https://github.com/conventional-changelog/conventional-changelog)  
