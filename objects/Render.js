class Render {
    constructor(response, locals, template) {
        this.response = response
        this.locals = locals
        this.template = template
    }

    render() {
        console.log(JSON.stringify(this.locals))
        this.response.render(this.template, this.locals)
    }

}

class RenderHomepage extends Render {
    constructor( response, locals ) {
        super(response, locals, 'pages/homepage')
    }
}

module.exports = Render