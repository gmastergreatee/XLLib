import XLLibCore from '../../xllib-core.js';

export default class HeaderAddress {
    #addressEl = null;
    #xllib = null;
    get XLLib() {
        return this.#xllib;
    }

    /**
     * Initialize the header address
     * @param {HTMLElement} addressEl 
     * @param {XLLibCore} xllib 
     */
    constructor(addressEl, xllib) {
        this.#addressEl = addressEl;
        this.#xllib = xllib;
    }

    setText(text) {
        this.#addressEl.textContent = text;
    }
}