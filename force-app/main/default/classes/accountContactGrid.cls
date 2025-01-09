public class accountContactGrid {
    
    @AuraEnabled(cacheable =true)
    public static List<Account> allAccountsWithContacts(){
        return [Select id,Name, Phone, Website, (Select Id, Name, Phone, Email from Contacts) from Account where Id IN (Select AccountId from Contact) limit 5];
    }

}