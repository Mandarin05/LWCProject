import { LightningElement } from 'lwc';

export default class AccountSearchBox extends LightningElement {

    searchKey = ' ';
    onChangeHandler(event){
        this.searchKey = event.target.value;
        console.log(this.searchKey);
    }

    onClickHanlder(){
       const eventnew = new CustomEvent('searchaccountcontact', {detail: this.searchKey});
       this.dispatchEvent(eventnew); 
       console.log(eventnew);
    }
}