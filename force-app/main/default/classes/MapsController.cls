public class MapsController {
    @AuraEnabled(Cacheable = true)
    public static list<Account> getAccounts(){
        return ([SELECT Id, BillingStreet, BillingCity, BillingState, BillingPostalCode, BillingCountry, BillingLatitude, BillingLongitude, BillingGeocodeAccuracy, BillingAddress,description FROM Account where BillingStreet !='' limit 10]);
    }

}