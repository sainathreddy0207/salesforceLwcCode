import { LightningElement } from 'lwc';

export default class C2pModalComponent extends LightningElement {
    closeHandler(){
        console.log('testing the child')
        const myEvent = new CustomEvent('closemodal',({bubbles:true,detail: "Model Closed Success"
        }));
        this.dispatchEvent(myEvent);
    }
    footerHandler(){
        console.log('Bye');
    }

}