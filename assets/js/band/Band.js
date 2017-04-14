import {} from '../../css/band.scss';

export default class Band {
    constructor(name){ 
        this.name = name;

        document.querySelector('.band').innerHTML = this.name;
    }

    play() {
        console.log(`${this.name} starts to play`);
    }

    stop() {
        console.log(`${this.name} stops playing`);
    }
}