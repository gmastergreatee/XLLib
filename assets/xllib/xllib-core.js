import XLLibConstants from "./constants.js";
import HeaderAddress from "./objects/header/header-address.js";
import HeaderFormula from "./objects/header/header-formula.js";

class XLLibCore {
    #name = '';
    get name() {
        return this.#name;
    }

    #targetElement = new HTMLElement();
    get targetElement() {
        return this.#targetElement;
    }

    #headerAddress = new HeaderAddress(null, null);
    #headerFormula = new HeaderFormula(null, null);

    constructor(targetElementId) {
        this.#name = `xllib-${targetElementId}`;
        this.#targetElement = document.getElementById(targetElementId);
    }

    initialize() {
        this.#initializeXLLib();
    }

    #initializeXLLib() {
        var containerEl = document.createElement('div');
        containerEl.id = `${this.#name}-container`;
        containerEl.classList.add(`xllib-container`);

        this.#initHeader(containerEl);
        this.#initBody(containerEl);
        this.#initInputs(containerEl);
    }

    /**
     * Initializes the xllib header
     * @param {HTMLElement} containerEl 
     */
    #initHeader(containerEl) {
        var headerEl = document.createElement('div');
        headerEl.id = `${this.#name}-header`;
        headerEl.classList.add('xllib-header');

        var headerAddressEl = document.createElement('div');
        headerAddressEl.id = `${this.#name}-header-address`;
        headerAddressEl.classList.add('xllib-header-address');
        this.#headerAddress = new HeaderAddress(headerAddressEl, this);

        var formulaEl = document.createElement('div');
        formulaEl.id = `${this.#name}-formula`;
        formulaEl.classList.add('xllib-formula');
        this.#headerFormula = new HeaderFormula(formulaEl, this);

        headerEl.append(headerAddressEl, formulaEl);
        containerEl.append(headerEl);
    }

    /**
     * Initializes the xllib canvas layers
     * @param {HTMLElement} containerEl 
     */
    #initBody(containerEl) {
        Object.getOwnPropertyNames(XLLibConstants.CanvasConstants.LayerTypes).forEach(layerType => {
            var canvasEl = document.createElement('canvas');
            canvasEl.id = `${this.#name}-${layerType}`;
            canvasEl.classList.add(`xllib-${layerType}`);
            canvasEl.dataset.typeid = XLLibConstants.CanvasConstants[layerType];

            containerEl.append(canvasEl);
        });
    }

    /**
     * [TODO] Initializes the input controls for different cell-types
     * @param {HTMLElement} containerEl 
     */
    #initInputs(containerEl) {
    }
}

export default XLLibCore;