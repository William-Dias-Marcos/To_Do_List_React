class Item {

    constructor(text) {
        this.id = Date.now().toString('16') + Math.random().toString('16').substring(2) //forma de definir um id de forma que não gere um id igual
        this.text = text;
        this.done = false;
    }
}

export default Item; 