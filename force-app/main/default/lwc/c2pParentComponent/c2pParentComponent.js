import { LightningElement } from 'lwc';

export default class C2pParentComponent extends LightningElement {
    showModal = false;
    msg;
    clickHandler(){
        this.showModal = true;

    }
    childHandler(event){
        this.msg = event.detail;
        console.log('parent rec');
        this.showModal = false;
    }
}