import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {
    selected={}
    correcterAnswers = 0;
    isSubmitted = false;
    myQuestions=[ 
        {
            id:'Question1',
            question:"Captial of India?",
            answer:{
                a: "Bangalore",
                b: "Hyderabad",
                c: "Chennai",
                d: "New Delhi",
            },
            correctAnswer: "d"
        },{
            id:'Question2',
            question:"Captial of Telangana?",
            answer:{
                a: "Bangalore",
                b: "Hyderabad",
                c: "Chennai",
                d: "New Delhi",
            },
            correctAnswer: "b"
        },{
            id:'Question 3',
            question:"Captial of Karnataka?",
            answer:{
                a: "Bangalore",
                b: "Hyderabad",
                c: "Chennai",
                d: "New Delhi",
            },
            correctAnswer: "a"
        }
    ]

    get allNotSelected(){
        return !(Object.keys(this.selected).length === this.myQuestions.length);
    }

    get isScored(){
        return `slds-text-heading_large ${this.myQuestions.length === this.correcterAnswers ? 'slds-text-color_success' : 'slds-text-color_error'}`;
    }

    changeHandler(event){
     
        const {name, value} = event.target;''

        this.selected = {...this.selected, [name]:value};
    }

    submitHandler(event){
        this.isSubmitted = true;
        event.preventDefault();
        // example to understand below logic this.selected = {"Question1":"a","Question2":"b"}
        //this.myQuestions.filter(item=>"a" === "d");
        let correct = this.myQuestions.filter(item=>this.selected[item.id] === item.correctAnswer);
        this.correcterAnswers = correct.length;
     


    }
    resetHandler(){
        this.isSubmitted = false;
        this.selected = {};
        this.correcterAnswers = 0;

    }
} 