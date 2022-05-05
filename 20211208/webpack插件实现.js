const fs = require('fs')
const execSync = require('child_process').execSync

class CopyrightPlugin {

    constructor({ filename }) {
        this.filename = filename;
    }

    readLogInfo(order){
        return execSync(order).toString().replace(/\n$/,'')
    } 

    isGitInit(){
        const dir = fs.readdirSync("./")
        return dir.includes(".git")
    }

    apply(compiler) {
        compiler.hooks.emit.tap('CopyrightPlugin',
            compilation => {
                const assets = compilation.assets;
                const that = this;
                fs.readFile('./package.json', (err, data) => {
                    if (err) {
                        console.log(err)
                        return
                    }
                    if(!this.isGitInit){
                        compilation.warnings.push("please make sure git init")
                        return
                    }
                    const log =  this.readLogInfo('git log')
                    assets[that.filename] = {
                        source:()=>{
                            return log
                        },
                        size:()=>{
                            return log.length
                        }
                    }
                })
            })
    }
}
module.exports = CopyrightPlugin