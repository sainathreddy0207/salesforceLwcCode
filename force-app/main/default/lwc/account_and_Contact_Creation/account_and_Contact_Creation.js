import { LightningElement, api } from "lwc";

import { createRecord } from "lightning/uiRecordApi";

import { CloseActionScreenEvent } from "lightning/actions";

import accountObject from "@salesforce/schema/Account";

import contactObject from "@salesforce/schema/Contact";

import name from "@salesforce/schema/Account.Name";

import lastName from "@salesforce/schema/Contact.LastName";

import accountIdField from "@salesforce/schema/Contact.AccountId";

export default class CreateAccountAndContact extends LightningElement {
    @api accountName;

    @api firstName;

    @api lastName;

    @api title;

    @api department;

    @api email;

    @api fax;

    @api phone;

    @api assistant;

    @api otherphone;

    handleAccountName(event) {
        this.accountName = event.target.value;
    }

    handleContactChange(event) {
        if (event.target.label == "First Name") {
            this.firstName = event.target.value;
        }

        if (event.target.label == "Last Name") {
            this.lastName = event.target.value;
        }
        if (event.target.label == "Title") {
            this.title = event.target.value;
        }

        if (event.target.label == "Department") {
            this.department = event.target.value;
        }

        if (event.target.label == "Email") {
            this.email = event.target.value;
        }

        if (event.target.label == "Fax") {
            this.fax = event.target.value;
        }

        if (event.target.label == "Business Phone") {
            this.phone = event.target.value;
        }

        if (event.target.label == "Assistant") {
            this.assistant = event.target.value;
        }

        if (event.target.label == "Other Phone") {
            this.otherphone = event.target.value;
        }
    }

    @api validate() {
        if (!this.accountName) {
            return {
                isValid: false,

                errorMessage: "Account Name cannot be null",
            };
        } else if (!this.lastName) {
            return {
                isValid: false,

                errorMessage: "Last Name cannot be null",
            };
        }

        const accountFields = {};

        accountFields[name.fieldApiName] = this.accountName;

        const accountRecordInput = { apiName: accountObject.objectApiName, fields: accountFields };

        createRecord(accountRecordInput)
        .then((account) => {
                console.log("Account created successfully: ", account.id);

                const contactFields = {};

                if (this.firstName) {
                    contactFields["First Name"] = this.firstName;
                }

                contactFields[lastName.fieldApiName] = this.lastName;

                if (this.title) {
                    contactFields["Title"] = this.title;
                }

                if (this.department) {
                    contactFields["Department"] = this.department;
                }

                if (this.email) {
                    contactFields["Email"] = this.email;
                }

                if (this.fax) {
                    contactFields["Fax"] = this.fax;
                }

                if (this.phone) {
                    contactFields["Business Phone"] = this.phone;
                }

                if (this.assistant) {
                    contactFields["Assistant"] = this.assistant;
                }

                if (this.otherphone) {
                    contactFields["Other Phone"] = this.otherphone;
                }

                contactFields[accountIdField.fieldApiName] = account.id;

                const contactRecordInput = { apiName: contactObject.objectApiName, fields: contactFields };

                createRecord(contactRecordInput);
            })

        .then((contact) => {
                console.log("Contact created successfully: ", contact.id);

                this.dispatchEvent(new CloseActionScreenEvent());
            })

            .catch((error) => {
                console.error("Error creating account and contact: ", error);
            });
    }

    handleCancel() {
        this.dispatchEvent(new CloseActionScreenEvent());
    }
}