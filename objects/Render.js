class Render {
    constructor(res, object, template) {
        this.res = res
        this.object = object
        this.template = template
    }

    render() {
        console.log(JSON.stringify(this.object))
        this.res.render(this.template, this.object)
    }

}

module.exports = Render