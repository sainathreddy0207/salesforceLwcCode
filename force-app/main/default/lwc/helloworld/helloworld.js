import { LightningElement , track} from 'lwc';

export default class Helloworld extends LightningElement {
     name = 'Sainath'
     nickname = 'cyber'

     changeHandler(event){
        this.nickname = event.target.value

     }

      @track address = {
      name: 'Anantapur',
      postalcode: 515003


     } 

     trackHandler(event){
      this.address.name = event.target.value
      console.log(event.target.value);
     }

     Users = ["Sainath", "Nikitha"]
     number = 26
     number2 = 2;

     get firstUser(){
      return this.Users[1];
     }
 

}