export default class Greeter {
    constructor(name) {
        this.name = name;
    }

    greet() {
        let messages = [
            'Dobry den',
            'Guter Tag',
            'Salut'
        ];

        let body = $('body');
        for (let message of messages) {
            body.append(`<p>${message}</p>`)
        }
    }
}