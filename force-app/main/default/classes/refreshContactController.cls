public class refreshContactController {
    @AuraEnabled(cacheable= true)
    public static list<Contact> getContactList(){
        List<Contact> contactList = new List<Contact>();
        contactList= [SELECT Id, FirstName,LastName,Email FROM Contact LIMIT 5 ];
        
        return contactList;
        
    }

}