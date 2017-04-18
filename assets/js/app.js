// CSS
import {} from '../css/style.scss';

// JS
import ArrayHelper from './utils/ArrayHelper';
import Band from './band/Band';

(function() {
    var arrayHelper = new ArrayHelper();
    var list = [1,2,3,4,5];
    
    console.log(arrayHelper.reverse(list));

    // Band
    var metallica = new Band('Metallica');

    metallica.play();
    metallica.addImage();

    setTimeout(()=>{
        metallica.stop
    }, 1000);
})();