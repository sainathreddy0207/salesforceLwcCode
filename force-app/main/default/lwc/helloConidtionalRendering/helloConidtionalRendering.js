import { LightningElement } from 'lwc';

export default class HelloConidtionalRendering extends LightningElement {
    isVisibile = false
    handleclick(){
        this.isVisibile = true;
    }
}