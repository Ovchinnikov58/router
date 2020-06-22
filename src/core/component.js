export class Component {
    constructor(config) {
        this.template = config.template;
        this.selector = config.selector;
    }

    render() {
        try {
            document.querySelector(this.selector).innerHTML = compileTemplate(this.template, this.data);
        }
        catch {
            //console.log(`subComponent not found`)
        }
    }
}

function compileTemplate (template, data) {
    let reg = /\{{(.*?)}}/g;

    template = template.replace(reg, (str, d) => {
        let key = d.trim()

        return data[key]
    })
    return template
}
