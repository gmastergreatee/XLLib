import XLLibCore from "../../xllib-core.js";

export default class HeaderFormula {
    #formulaEl = new HTMLElement();
    #xllib = null;
    get XLLib() {
        return this.#xllib;
    }

    /**
     * Initializes the header formula
     * @param {HTMLElement} formulaEl 
     * @param {XLLibCore} xllib 
     */
    constructor(formulaEl, xllib) {
        this.#formulaEl = formulaEl;
        this.#xllib = xllib;
    }

    setText(text) {
        this.#formulaEl.textContent = text;
    }
}