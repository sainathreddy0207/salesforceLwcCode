import { LightningElement,wire,api } from 'lwc';
import { getPicklistValues,getObjectInfo } from 'lightning/uiObjectInfoApi';
import account_Object from '@salesforce/schema/Account';
import source from '@salesforce/schema/Account.AccountSource';

export default class GetPicklistValuesLWC extends LightningElement {

    @api sourceOptions = [];

    @wire (getObjectInfo,{objectApiName: account_Object})
    objectInfo;

    @wire(getPicklistValues,{recordTypeId: '$objectInfo.data.defaultRecordTypeId',fieldApiName:source})
    wiredPicklist({error,data}){
        if(data){
            this.sourceOptions = data.values.map(item=>({label:item.label,value:item.value}));
        }else{
            console.log(error);
        }

    }


}