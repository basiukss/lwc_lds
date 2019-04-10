// wireGetRecordDynamicContact.js
import { LightningElement, api, wire, track } from 'lwc';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import { getFieldValue } from 'lightning/uiRecordApi';

import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import CONTACT_OBJECT from '@salesforce/schema/Contact';
import ACCOUNT_FIELD from '@salesforce/schema/Contact.AccountId';
import NAME_FIELD from '@salesforce/schema/Contact.Name';
import TITLE_FIELD from '@salesforce/schema/Contact.Title';
import PHONE_FIELD from '@salesforce/schema/Contact.Phone';
import EMAIL_FIELD from '@salesforce/schema/Contact.Email';

export default class Parent extends LightningElement {
    accountField = ACCOUNT_FIELD;
    nameField = NAME_FIELD;
    titleField = TITLE_FIELD;
    phoneField = PHONE_FIELD;
    emailField = EMAIL_FIELD;

    @api recordId;
    @api objectApiName;
    
    @track objectInfo;

    @wire(getObjectInfo, { objectApiName: ACCOUNT_OBJECT })
    objectInfo;
    
    // get name() {
    //     return this.contact.data.fields.Name.value;
    // }

    renderedCallback(){
        console.log('rendered');
        // console.log(this.account());
        console.log(this.objectApiName + ':' + this.recordId);
        //console.log(this.objectInfo.data.apiName);
        console.log(this.ACCOUNT_FIELD);
    }
}