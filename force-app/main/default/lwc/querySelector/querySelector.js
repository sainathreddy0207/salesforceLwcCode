import { LightningElement } from 'lwc';

export default class QuerySelector extends LightningElement {
    userName = ["Sai","cyberpunk"];
    fetchDetails(){
        const elem = this.template.querySelector('h1');
        elem.style.border = "1px solid red";

        const userElements = this.template.querySelectorAll('.name');
        console.log(elem.innerText);
        Array.from(userElements).forEach(item=>{
            console.log(item.innerText);
            item.setAttribute("title", item.innerText);
        })
        ///lwc:manual dom
        const childElem = this.template.querySelector('.child');
        childElem.innerHTML = '<p> Hey there this is child </p>';


    } 
}