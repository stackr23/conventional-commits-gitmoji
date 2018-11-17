"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.gitMojiToCC=exports.addCCPrefix=exports.addGitmoji=void 0;var _logger=_interopRequireDefault(require("@stackr23/logger")),_extendGitmoji=require("./extendGitmoji.js");function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}var addGitmoji=function(){}// will be used for git-cz, commitlint, changelog, usw
// tbd: replace body
;exports.addGitmoji=addGitmoji;var addCCPrefix=function(){};exports.addCCPrefix=addCCPrefix;var gitMojiToCC=function(a){var b,c,d=a.name,e=a.emoji,f=_extendGitmoji.mappedConfig[d];return null==f?e:(b=f.cc_prefix,b=f.cc_prefix,null==b)?e:(c="".concat(b,"(").concat(e,"):"),c)};exports.gitMojiToCC=gitMojiToCC;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90cmFuc2Zvcm1Db21taXRNc2cuanMiXSwibmFtZXMiOlsiYWRkR2l0bW9qaSIsImFkZENDUHJlZml4IiwiZ2l0TW9qaVRvQ0MiLCJwcmVmaXgiLCJ0aXRsZVByZWZpeCIsIm5hbWUiLCJlbW9qaSIsImVtb2ppRXh0ZW5kZWQiLCJtYXBwZWRDb25maWciLCJjY19wcmVmaXgiXSwibWFwcGluZ3MiOiIyVEFJTyxHQUFNQSxDQUFBQSxVQUFVLENBQUcsVUFBTSxDQUUvQixDQURHO0FBR0o7QUFKTyxDLDhCQUtBLEdBQU1DLENBQUFBLFdBQVcsQ0FBRyxVQUFzQixDQUVoRCxDQUZNLEMsZ0NBSUEsR0FBTUMsQ0FBQUEsV0FBVyxDQUFHLFdBQW1DLElBRXREQyxDQUFBQSxDQUZzRCxDQUU5Q0MsQ0FGOEMsQ0FBakNDLENBQWlDLEdBQWpDQSxJQUFpQyxDQUEzQkMsQ0FBMkIsR0FBM0JBLEtBQTJCLENBQ3REQyxDQUFhLENBQUdDLDRCQUFhSCxDQUFiLENBRHNDLE9BSXJDLEtBQWpCLEVBQUFFLENBSnNELENBSy9DRCxDQUwrQyxFQVExREgsQ0FBTSxDQUFHSSxDQUFhLENBQUNFLFNBUm1DLENBYTFETixDQUFNLENBQUdJLENBQWEsQ0FBQ0UsU0FibUMsQ0FlNUMsSUFBVixFQUFBTixDQWZzRCxFQWdCL0NHLENBaEIrQyxFQW1CMURGLENBQVcsV0FBTUQsQ0FBTixhQUFnQkcsQ0FBaEIsTUFuQitDLENBcUJuREYsQ0FyQm1ELENBc0I3RCxDQXRCTSxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGxvZ2dlciBmcm9tICdAc3RhY2tyMjMvbG9nZ2VyJ1xuXG5pbXBvcnQge21hcHBlZENvbmZpZ30gZnJvbSAnLi9leHRlbmRHaXRtb2ppLmpzJ1xuXG5leHBvcnQgY29uc3QgYWRkR2l0bW9qaSA9ICgpID0+IHtcbiAgICAvLyB3aWxsIGJlIHVzZWQgZm9yIGdpdC1jeiwgY29tbWl0bGludCwgY2hhbmdlbG9nLCB1c3dcbn1cblxuLy8gdGJkOiByZXBsYWNlIGJvZHlcbmV4cG9ydCBjb25zdCBhZGRDQ1ByZWZpeCA9IChjb21taXRNc2csIGVtb2ppKSA9PiB7XG5cbn1cblxuZXhwb3J0IGNvbnN0IGdpdE1vamlUb0NDID0gKHtuYW1lLCBlbW9qaX0sIGV4dGVuZGVkQ29uZmlnKSA9PiB7XG4gICAgbGV0IGVtb2ppRXh0ZW5kZWQgPSBtYXBwZWRDb25maWdbbmFtZV0sXG4gICAgICAgIHByZWZpeCwgdGl0bGVQcmVmaXhcblxuICAgIGlmIChlbW9qaUV4dGVuZGVkID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIGVtb2ppXG4gICAgfVxuXG4gICAgcHJlZml4ID0gZW1vamlFeHRlbmRlZC5jY19wcmVmaXhcblxuICAgIC8vIFRCRDogc2NvcGUgPSBlbW9qaUV4dGVuZGVkLmNjX3ByZWZpeFxuICAgIC8vIHByZWZpeChzY29wZSk6IGVtb2ppXG5cbiAgICBwcmVmaXggPSBlbW9qaUV4dGVuZGVkLmNjX3ByZWZpeFxuXG4gICAgaWYgKHByZWZpeCA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBlbW9qaVxuICAgIH1cblxuICAgIHRpdGxlUHJlZml4ID0gYCR7cHJlZml4fSgke2Vtb2ppfSk6YFxuXG4gICAgcmV0dXJuIHRpdGxlUHJlZml4XG59XG4iXX0=