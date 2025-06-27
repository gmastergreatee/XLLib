export default class CanvasLayer {
    #name = null;
    #element = null;

    constructor(name, element) {
        this.#name = name;
        this.#element = element;
    }
}