export function setBackgroundImage(JSON, selector) {
    const today = new Date(JSON.datetime)
        
    const getHour = today.getHours();

    if(!(getHour > '5' && getHour < '18')) {

        selector.querySelector('.bg-dark').classList.remove('d-none');
        selector.querySelector('.bg-light').classList.add('d-none');
        document.querySelector('body').classList.remove('light');
        document.querySelector('body').classList.add('dark');
    }
}