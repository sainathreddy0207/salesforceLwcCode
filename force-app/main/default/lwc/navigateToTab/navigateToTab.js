import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation';
import {encodeDefaultFieldValues} from 'lightning/pageReferenceUtils'

export default class NavigateToTab extends NavigationMixin(LightningElement) {
    navigateToTab(){
        
            this[NavigationMixin.Navigate]({
                type:'standard__navItemPage',
                attributes:{
                    apiName : 'MemoryGame'
                    
                }
            })
        }

    
}