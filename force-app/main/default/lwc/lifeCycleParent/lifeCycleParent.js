import { LightningElement } from 'lwc';

export default class LifeCycleParent extends LightningElement {
   
    constructor(){
        super()
        console.log("parent constructor called");
    }

    connectedCallback(){
        console.log("Parent Connected callback");
    }

    renderedCallback(){
        console.log('rendered callback called');
    }
    errorCallback(error,stack){
        console.log(error.message);
        console.log(stack);
    }
    showChild = false;
    handleClick(){
        this.showChild = !this.showChild;

    }
}