import { LightningElement,wire } from 'lwc';
import accountList from'@salesforce/apex/AccountController.getAccounts';

export default class ApexWireImperative extends LightningElement {
    accounts
    handleClick(){
        accountList().then(result=>{
            this.accounts = result
        }).catch(error=>{
            console.error(error)
        })
    }
}