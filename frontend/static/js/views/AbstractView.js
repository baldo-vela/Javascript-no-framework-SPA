class AbstractView {
    //Static container
    static all = []

    constructor (params) {
        this.params = params;
    }

    setTitle(title) {
        document.title = title;
    }

    render() {
        return ``;
    }
}