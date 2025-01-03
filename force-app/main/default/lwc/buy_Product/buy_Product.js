import { LightningElement, wire, api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import userId from '@salesforce/user/Id';
import getProducts from '@salesforce/apex/getProduct.getProducts';
import sendEmail from '@salesforce/apex/orderEmail.sendEmail';

export default class BuyProduct extends LightningElement {
    products;
    @wire(getProducts)
    wiredProducts({ error, data }) {
        if (data) {
            this.products = data;
        } else if (error) {
            console.error(error);
        }
    }

    buyProduct(event) {
        const toastEvent = new ShowToastEvent({
            title: 'Success!',
            message: 'Order Sucessfully Placed',
            variant: 'success',
            mode: 'dismissable'
        });
        this.dispatchEvent(toastEvent);
        sendEmail({userId});
    }
}