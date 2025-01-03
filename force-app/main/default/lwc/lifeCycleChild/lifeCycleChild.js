import IsWon from '@salesforce/schema/Opportunity.IsWon';
import { LightningElement } from 'lwc';

export default class LifeCycleParent extends LightningElement {
    constructor(){
        super()
        console.log("CHild constructor called");
    }
    interval
    connectedCallback(){
        console.log("Child Connected callback");
        throw new Error('loading of new child component');
        
       
    }

    renderedCallback(){
        console.log('Child rendered callback called');
    }
    disconnectedCallback(){
        alert('Disconnected is being called');
        
    }

}  