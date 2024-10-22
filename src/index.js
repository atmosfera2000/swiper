import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import './style.scss';

const SWIPER_CSS_CLASS = '.swiper';

const swiper = new Swiper(SWIPER_CSS_CLASS, {
    modules: [Navigation]
});
