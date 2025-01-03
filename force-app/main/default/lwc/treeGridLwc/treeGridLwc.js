import { LightningElement, wire } from 'lwc';
import getAccountsWithContacts from '@salesforce/apex/accountContactGrid.allAccountsWithContacts'

export default class TreeGridLwc extends LightningElement {

    gridData

    @wire(getAccountsWithContacts)
    accountsWithContactList({ data, error }) {
        if (data) {
            console.log('result', data);
            this.formatGridData(data);
            
        } else {
            console.error('error', error);
        }
    }


    gridColumns = [{
        label: 'Name',
        fieldName: 'Name',
        type: 'text'
    },
    {
        label: 'Phone',
        fieldName: 'Phone',
        type: 'text'

    },
    {
        label: 'Account Website',
        fieldName: 'Website',
        type: 'url',
        typeAtrributes: {
            target: '_blank'
        }
    }]
    
    formatGridData(result){
        this.gridData= result.map(item=>{
            const {Contacts, ...accounts} = item
            return {...accounts, "_children": Contacts};
        })

        console.log(this.gridData);

    }

}