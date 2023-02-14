import { LightningElement } from 'lwc';

export default class AccountSearchParent extends LightningElement {
 searchText = ' ';   
    SearchAccountContactHandler(event){
        this.searchText = event.detail;
        console.log('Value from Child' + this.searchText);
    }
}