import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation';
import {encodeDefaultFieldValues} from 'lightning/pageReferenceUtils'


export default class NavigateToRecordPage extends NavigationMixin(LightningElement) {

    navigateToNewRecord(){
        this[NavigationMixin.Navigate]({
            type:'standard__objectPage',
            attributes:{
                objectApiName : 'Contact',
                actionName: 'new'
            }
        })
    }

    navigateToNewRecordWithDefault(){
        const defaultValue = encodeDefaultFieldValues({ 
            FirstName:'Cyber',
            LastName:'Punk',
            LeadSource:'4019'
        }) 
        this[NavigationMixin.Navigate]({ 
            type:'standard__objectPage',
            attributes:{ 
                objectApiName:'Contact',
                actionName:'new'
            },
            state:{ 
                defaultFieldValues: defaultValue
            }
        })
    }

    navigateToListView(){
        this[NavigationMixin.Navigate]({
            type:'standard__objectPage',
            attributes:{
                objectApiName : 'Contact',
                actionName: 'list'
            },
            state:{
                filterName: 'AllContacts',
            }
        })

    }

    navigateToFiles(){
        this[NavigationMixin.Navigate]({
            type:'standard__objectPage',
            attributes:{
                objectApiName : 'ContentDocument',
                actionName: 'home'
            }
        })

    }

    navigateToRecordPageView(){
        this[NavigationMixin.Navigate]({
            type:'standard__recordPage',
            attributes:{
                recordId:'0035g00000vhoFGAAY',
                objectApiName: 'Contact',
                actionName:'view'
            }
        })
    }

    navigateToRecordPageEdit(){
        this[NavigationMixin.Navigate]({
            type:'standard__recordPage',
            attributes:{
                recordId:'0035g00000vhoFGAAY',
                objectApiName: 'Contact',
                actionName:'edit'
            }
        })
    }

    navigateToRealtedRecord(){
        this[NavigationMixin.Navigate]({
            type:'standard__recordRelationshipPage',
            attributes:{
                recordId: '0015g000010FE59AAG',
                objectApiName : 'Account',
                relationshipApiName: 'Contacts',
                actionName: 'view'
            }
        })
    }

}