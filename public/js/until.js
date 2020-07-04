const LOCAL_DOMAIN = 'http://localhost:3000';

function redirect(path) {
    if (!path) {
        return;
    }
    return window.location = `${LOCAL_DOMAIN}/${path}`;
}