import { LightningElement,wire } from 'lwc';
import accountList from'@salesforce/apex/AccountController.getAccounts';

export default class ApexWireLwc extends LightningElement {
    //@wire(apexMethodName,{apexMethodParams})
    accountsLoop;
    @wire(accountList)
    accounts;

    @wire(accountList)
    accountsHandler({data,error}){
        if(data){
            console.log(data);
            this.accountsLoop = data.map(item=>{
                console.log(item.Type)
                let newType = item.Type === "Customer - Channel"? 'Channel': '';
                return {...item,newType}
            })

        }if(error){
            console.error(error);
        }

    }



}