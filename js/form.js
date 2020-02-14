class Field extends Element {
    constructor(elementId) {
        super(`#${elementId}`);
        this.error = new Element(`#${elementId} + .error`);
    };

    get value() {
        return this.el.value;
    };

    touch(touched) {
        if (touched) {
            this.el.classList.add('touched');
        }
        else {
            this.el.classList.remove('touched');
        };
    };

    validate() {
        this.error.show(!this.el.value);
    };

    clear() {
        this.el.value = '';
        this.touch(false);
        this.error.show(false);
    };
};



