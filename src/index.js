import Swiper from 'swiper';
import { EffectCreative} from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/effect-creative';
import 'swiper/scss/pagination';

import './style.scss';

const SWIPER_ELEMENT = '.swiper';
const SWIPER_CSS_NEXT = '.swiper-button-next';
const SWIPER_CSS_PREV = '.swiper-button-prev';
const SWIPER_ELEMENT_PAGINATION = '.swiper-pagination';


const swiper = new Swiper(SWIPER_ELEMENT, {
    modules: [EffectCreative],   
    loop: true, 
    effect: 'creative',     
    centeredSlides: true, 
    creativeEffect: {
        limitProgress: 2,
        prev: {
            translate: ["-100%", 0, -600],
            opacity: .4,          
        },
        next: {
            translate: ["100%", 0, -600],
            opacity: .4,           
        }
    }
});
