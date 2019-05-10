class Render {
    constructor(res, object, template) {
        this.res = res
        this.object = object
        this.template = template
    }

    render() {
        console.log(JSON.stringify(this.object.toJson()))
        this.res.render(this.template, this.object.toJson())
    }

}

module.exports = Render