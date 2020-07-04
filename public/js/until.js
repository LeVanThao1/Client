const LOCAL_DOMAIN = 'https://your-lap.herokuapp.com';

function redirect(path) {
    if (!path) {
        return;
    }
    return window.location = `${LOCAL_DOMAIN}/${path}`;
}