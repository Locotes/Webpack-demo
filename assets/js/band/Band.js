import {} from '../../css/band.scss';
import logo from '../../images/bands/metallica.jpg';

export default class Band {
    constructor(name){ 
        this.name = name;
        this.image = null;
        this.selector = document.querySelector('.band');
        
        this.selector.innerHTML = this.name;
    }

    play() {
        console.log(`${this.name} starts to play`);
    }

    stop() {
        console.log(`${this.name} stops playing`);
    }

    addImage() {
        this.selector.innerHTML += `<img src="${logo}" class="band-image" />`;
    }
}