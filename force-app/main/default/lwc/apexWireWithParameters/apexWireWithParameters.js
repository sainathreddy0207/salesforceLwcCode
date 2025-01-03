import { LightningElement,wire } from 'lwc';
import filterAccounts from'@salesforce/apex/AccountController.filterAccounts';

export default class ApexWireWithParameters extends LightningElement {

        selctionType='';
        @wire(filterAccounts,{type:'$selctionType' })
        fetchaccounts;

        get accountTypes(){
            return [
                {label:'Customer - Channel', value: 'Customer - Channel'},
                {label: 'Customer - Direct', value: 'Customer - Direct'}
            ]
        }
        handleCombo(event){
            this.selctionType = event.detail.value;
        }
}