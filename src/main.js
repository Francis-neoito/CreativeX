import './style.css';
import { initHomeMainApp } from './components/homepageapp/homecontroller'; 

const initHome = function(){
    const app = initHomeMainApp();
    app.mount('#homeapp');
}

initHome();