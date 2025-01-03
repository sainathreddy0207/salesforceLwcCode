import { LightningElement } from 'lwc';
import signInTemplate from './signInTemplate.html';
import signUpTemplate from './signUpTemplate.html';
import renderTemplate from './renderMethod.html';
export default class RenderMethod extends LightningElement {
    selectedButton = '';
    render(){
        return this.selectedButton ==='Signup'? signUpTemplate :
                 this.selectedButton ==='Signin' ? signInTemplate :
                  renderTemplate;
    }
    handleClick(event){
        this.selectedButton = event.target.label;

    }
    submitHandler(event){
        console.log(`${event.target.label} Sucessfully`);
    }
}