# @stackr23/conventionalcommits-gitmoji
> git workflow enhancements and third party integrations

## [proposal] [conventionalcommits](https://www.conventionalcommits.org/) - [gitmoji](https://gitmoji.carloscuesta.me/) hook
* [ ] write npm plugin that creates a git-hook to prefix "structural elements" with gitmojis:  
  `fix: #33 header menu open()` => `:bug: fix: #33 header menu open()`

### roadmap
* [ ] __1. - analyse [conventionalcommits](https://www.conventionalcommits.org/)__  
  * [ ] define type of plugin (middleware, plugin, ...?)    
    standalone hook __|__ conventionalcommits-plugin __|__ add gitmoji feature "replace" (not recommended)
* [ ] __2. - sync config with gitmoji__  
  * [ ] add "conventionalcommits.mapping.js" to gitmoji  
  ```javascript
  {':bug:': 'fix:',':memo:': 'doc:' {...otherRules} default: 'change:'}
  ```  
  (PR into gitmoji repo to keep synced with updates)  

* [ ] __3. - create commit hook to filter commit messages__  
  make a conventionalcommits feature, if not possible  

## ohter conventional-commit tools
> should be considered into compatibility specations of @stackr23/conventionalcommits-gitmoji

* [semantic-release](https://github.com/semantic-release/semantic-release)  
* commitlint / [@commitlint/config-conventional](https://www.npmjs.com/package/@commitlint/config-conventional)  
* [conventional changelog](https://github.com/conventional-changelog/conventional-changelog)  
