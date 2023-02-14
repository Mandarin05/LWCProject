import { LightningElement, api, wire } from 'lwc';
import getAccounts from '@salesforce/apex/LWCAccountSearchController.acclist';

import { CurrentPageReference } from 'lightning/navigation'; 
import { fireEvent } from 'c/pubSub'; 

const COLUMNS = [
    { label: 'Id', fieldName: 'Id' },
    { label: 'Name', fieldName: 'Name'},
    { label: 'Action', type: 'button', typeAttributes:{
        label : 'View Contact',
        name : 'View Contact',
        title : 'View Contact',
        value : 'View_Contacts',
    }}
];
export default class AccountSearchResult extends LightningElement {

    @api searchTextOfResult;
    accountID;
    accountName;

    columnsData = COLUMNS;

    @wire(getAccounts, {SearchName : '$searchTextOfResult'})Accounts;

    @wire(CurrentPageReference) pageRef; 

    rowActionHandler(event){
        if(event.detail.action.value == 'View_Contacts'){
            const payload = {accountID : event.detail.row.Id,accountName : event.detail.row.Name};
        
        fireEvent(this.pageRef, "eventDetails", payload);
        console.log('result of Payload' + payload.accountID);
        console.log('result of Payload' + payload.accountName);

        }
            } 
    
}