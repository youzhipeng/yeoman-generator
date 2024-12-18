const Generator = require("yeoman-generator")

module.exports = class extends Generator{
    prompting(){
        return this.prompt([
            {
                type:"input",
                name:"name",
                message:"Project name:",
                default:this.appname
            }
        ]).then(answers => {
            this.answers = answers
        })
    }
    writing() {
        const path = ["1.md",'index.html','.env','config.js']
        path.forEach((item) => {
           this.fs.copyTpl(
            this.templatePath(item),
            this.destinationPath(item)
           )
        })
    }
}