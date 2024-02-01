let currentUrl = window.location.href;
const myHead = document.querySelector('head');


function getUrl(url) {
    if (url.includes('/#home')) myHead.setAttribute('title', 'Projectpage Home');
    if (url.includes('/#home')) return document.title = 'Projectpage Home';
    if (url.includes('thankyou')) myHead.setAttribute('title', 'Dankeschön');
    if (url.includes('thankyou')) return document.title = 'Dankeschön';


    else {
        myHead.setAttribute('title', 'Projectpage Home');
        return document.title = 'Projectpage Home';

    }

}


export function createTitel() {
    /**Returns HTML pagetitel in your browser */

    getUrl(currentUrl);
}