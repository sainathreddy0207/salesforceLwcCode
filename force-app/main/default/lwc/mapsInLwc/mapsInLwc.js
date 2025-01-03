import { LightningElement, wire } from 'lwc';
import getAccountsData from '@salesforce/apex/MapsController.getAccounts';
import Description from '@salesforce/schema/Account.Description';
import Street from '@salesforce/schema/Asset.Street';
import PostalCode from '@salesforce/schema/Asset.PostalCode';

export default class MapsInLwc extends LightningElement {

    mapMarkers=[]
    selectedMarker
    
    @wire(getAccountsData)
    accountHandler({data, error}){
        if(data){
            this.formatResponse(data);
        }else{
            console.error(error);
        }
    }

    formatResponse(data){
        this.mapMarkers = data.map(item=>{
            return {
                location:{
                    Street: item.BillingCity || '',
                    City: item.BillingCity || '',
                    PostalCode: item.BillingPostalCode || '',
                    State: item.BillingState || '',
                    Country: item.BillingCountry || ''
                },
                icon:'utility:salesforce7',
                title:item.Name,
                value:item.Name,
                description:item.description
            }
        })
        this.selectedMarker = this.mapMarkers.length && this.mapMarkers[0].value

    }

    callMarkerHandler(event){
        this.selectedMarker = event.detail.selectedMarkerValue;
    }
}