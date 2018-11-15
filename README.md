# @stackr23/gitmoji-conventional-commits
> add gitmojis to conventional commit messages

## relation table  
> to be continued

| commit type          | prefix | gitmoji    | versioning |
|--------------------- |--------|------------|------------|
| __bug fix__          | fix:   | :bug:      | patch      |
| __feature__          | feat:  | :sparkles: | minor      |
| __breaking change__  | fix:   | :boom:     | major      |
| documentation        | doc:   | :memo:     | —          |


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
