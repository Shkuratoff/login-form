let modal = null;
const USERNAME = 'admin';
const PASSWORD = 'admin';


function onLoginClick() {
    modal = new Modal();
    modal.show(true);
}

function onLogoutClick() {
    const logoutButton = new Element('#logoutButton');
    logoutButton.show(true);
    loggetUsername.show(false);
    loggetUsername.innerHTML = username.value;
    closeLoginModal();
}

function onModalBackDropClick() {
    closeLoginModal()
}


function onLoginSubmit() {

    try {
        const username = new Field('username');
        const password = new Field('password');

        const validUser = username.value === USERNAME && password.value === PASSWORD;
        if (validUser) {
            const loginButton = new Element('#loginButton');
            const loggetUsername = new Element('#loggetUsername');
            loginButton.show(false);
            loggetUsername.show(true);
            loggetUsername.innerHTML = username.value;
            closeLoginModal();
        }
        else {
            const error = new Element('#serverError');
            error.show(true);
            error.innerHTML = 'Invalid user name or password';
        }
    } catch (error) {
        console.log(error);
    }
    finally {
        return false;
    }
}


function onFildBlur(elementId) {
    const field = new Field(elementId);
    field.touch(true);
    field.validate();
}


function closeLoginModal() {
    if (modal) {
        modal.show(false);
        modal = null;

        const username = new Field('username');
        username.clear();

        const usernameEr = new Field('password');
        usernameEr.clear();

        const errorEl = document.getElementById('serverError');
        error.show(false);
        errorEl.innerHTML = '';
    }
}

