"use strict";var e=require("crypto"),t=function(){function t(r){var i=this;this.deriveKey=function(r,i){var n=Object.assign({},t.defaultDeriveKeyOpts,i),s=n.salt,o=n.iterations,a=n.digest;return e.pbkdf2Sync(r,s,o,32,a)},this.encryptString=function(t,r){var n=i.deriveKey(r,i._deriveKeyOptions),s=e.randomBytes(16),o=e.createCipheriv("aes-256-gcm",n,s),a=o.update(t.toString(),"utf8","base64");a+=o.final("base64");var f=Buffer.from(a).toString("hex");return s.toString("hex")+":"+f},this.decryptString=function(t,r){var n=i.deriveKey(r,i._deriveKeyOptions),s=t.toString().split(":");if(2!==s.length)throw new Error("Incorrect format for encrypted string: "+t);var o=s[0],a=s[1],f=Buffer.from(o,"hex"),u=Buffer.from(a,"hex").toString();return e.createDecipheriv("aes-256-gcm",n,f).update(u,"base64").toString()},r&&(this._deriveKeyOptions=r)}return t.defaultDeriveKeyOpts={salt:"s41t",iterations:1,digest:"sha512"},t}();module.exports=t;
//# sourceMappingURL=index.js.map