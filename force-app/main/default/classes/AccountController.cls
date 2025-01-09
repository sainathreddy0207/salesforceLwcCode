public class AccountController {
    @AuraEnabled(cacheable= true)
    public static list<Account> getAccounts(){
        List<Account> accountList = new List<Account>();
        accountList= [SELECT Id, Name, AccountNumber, Type, BillingAddress, ShippingAddress, Phone FROM Account   LIMIT 5 ];
        
        return accountList;
        
    }
    @AuraEnabled(cacheable= true)
    public static list<Account> filterAccounts(String type){
        List<Account> accountList = new List<Account>();
        accountList= [SELECT Id, Name, AccountNumber, Type, BillingAddress, ShippingAddress, Phone FROM Account where Type =:type  LIMIT 5 ];       
        return accountList;    
    }
    @AuraEnabled(cacheable= true)
    public static list<Account> findAccounts(String searchKey){
        String key = '%'+searchKey +'%';
        List<Account> accountList = new List<Account>();
        accountList= [SELECT Id, Name, AccountNumber, Type, BillingAddress, ShippingAddress, Phone FROM Account where Name LIKE :key  LIMIT 5 ];       
        return accountList;    
    }
}