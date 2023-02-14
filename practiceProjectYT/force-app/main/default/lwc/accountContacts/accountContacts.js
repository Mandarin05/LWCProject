import { LightningElement, wire, track } from 'lwc';
import { registerListener, unregisterAllListeners } from 'c/pubSub'; 
import { CurrentPageReference } from 'lightning/navigation'; 

import getAccountContacts from '@salesforce/apex/LWCAccountSearchController.contactList';

export default class AccountContacts extends LightningElement {

    @track details; 
    @track Title = 'Contacts';
    Contacts;
    NoContacts;
    Error;

    @wire(CurrentPageReference) pageRef; 

    @wire(getAccountContacts, {accID : '$details'})
    getWiredContact({data,error}){
        if(data){
            this.Contacts = data;
            if(data.length > 0){
                this.NoContacts = false;
            }else{
                this.NoContacts = true;
            }
        } else if(error){
            this.Error = error;
        }
    }

    connectedCallback() { 

        registerListener('eventDetails', this.sutUpDetails, this); 

    }

    disconnectedCallback() { 

        unregisterAllListeners(this); 

    } 

    sutUpDetails(dogDtl){ 

        this.details = dogDtl.accountID; 
        console.log('Value from PubSub Sender'+ this.details);

    } 

}    