import { LightningElement } from 'lwc';
import findAccounts from'@salesforce/apex/AccountController.findAccounts';

export default class ApexWireImperativeparam extends LightningElement {
    searchKey;
    accounts;
    delay;

    fetchhanlder(event){
        window.clearTimeout(this.delay);
        this.searchKey = event.target.value
        this.delay = setTimeout(()=>{
            this.callApex()
        },2000)
    }
    callApex(){
        findAccounts({searchKey : this.searchKey}).then(result=>{
            this.accounts = result
        }).catch(error=>{
            console.log(error)
        })
    }


}