import Swiper from 'swiper';
import { EffectCards } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/effect-cards';

import './style.scss';

const SWIPER_CSS = '.swiper';
const SWIPER_CSS_NEXT = '.swiper-button-next';
const SWIPER_CSS_PREV = '.swiper-button-prev';
const SWIPER_CSS_PAGINATION = '.swiper-pagination';


const swiper = new Swiper(SWIPER_CSS, {
    modules: [EffectCards],

    effect: 'cards',

    cardsEffect: {                  
        perSlideOffset: 15,         
        perSlideRotate: 10,         
        rotate: true,               
        slideShadows: false,        
    },    
});
