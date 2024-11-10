import Swiper from 'swiper';
import { EffectCards } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/effect-cards';

import './style.scss';

const SWIPER_CSS = '.swiper';

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
