import { LightningElement, api } from 'lwc';

export default class P2cSliderComponent extends LightningElement {
    @api val = 20
    changeHandler(event){ 
        this.val = event.target.value
    }

    @api resetSlider(){ 
        console.log('I');
        this.val = 50
    }
}