import menu from './menu.json';
import foodCards from '../templates/food-cards.hbs';

const menuContainer = document.querySelector('.js-menu');

function createMenuCardMarkup(menu) {
    return foodCards(menu);
    
}

const menuMarkup = createMenuCardMarkup(menu);
menuContainer.insertAdjacentHTML('beforeend', menuMarkup);
