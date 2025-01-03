import { LightningElement } from 'lwc';
import MOMENT from '@salesforce/resourceUrl/moment';
import {loadScript} from 'lightning/platformResourceLoader';

export default class ThirdPartyCss extends LightningElement {
    currentDate='';
    isLibLoaded = false;
    renderedCallback(){
        if(this.isLibLoaded){
            return
        }
        else{
        Promise.all(
            [loadScript(this, MOMENT+'/moment/moment.min.js')

            ]
        ).then(()=>{
            
            this.setDateOnScreen();
        }
        ).catch(error=>{
            console.log(error);
        })
        this.isLibLoaded = true;
    }}
    setDateOnScreen(){
        this.currentDate = moment().format('MMMM Do YYYY, h:mm:ss a');
    }
}