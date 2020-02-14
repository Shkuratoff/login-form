class Element {
    constructor(selector) {
        if (typeof selector !== 'string') {
            throw new Error('Element selector must be a string');
        };
        this.el = document.querySelector(selector);

        if (!this.el) {
            throw new Error(`Cannot find element with selector '${selector}`);
        };
    };

    get innerHTML() {
        return this.el.innerHTML;
    };
    set innerHTML(value) {
        return this.el.innerHTML = value;
    };

    show(visible) {
        if (visible) {
            this.el.classList.remove('hidden');
        } else {
            this.el.classList.add('hidden');
        };
    };

};
