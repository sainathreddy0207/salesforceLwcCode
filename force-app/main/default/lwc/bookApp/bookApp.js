import { LightningElement } from 'lwc';
const BOOK_URL = 'https://www.googleapis.com/books/v1/volumes?q='
export default class BookApp extends LightningElement {
    searchKey =''
    booksData;
    timer;

    connectedCallback() {
        this.fetchBookData()
    }

    fetchBookData() {
        fetch(BOOK_URL+this.searchKey)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                this.booksData = data
    })
            .catch(error => console.error(error))

    }

    fetchBooks(event){
        this.searchKey = event.target.value;
        
        window.clearTimeout(this.timer);
        this.timer = setTimeout(()=>{
            this.fetchBookData()
        },1000)

    }
}