class xllib_core {
    #name = '';
    get name() {
        return this.#name;
    }

    #targetElement = null;
    get targetElement() {
        return this.#targetElement;
    }

    constructor(targetElementId) {
        this.#name = `xllib-${targetElementId}`;
        this.#targetElement = document.getElementById(targetElementId);
    }
}