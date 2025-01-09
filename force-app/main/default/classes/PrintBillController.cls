public class PrintBillController {

    private final Billing__c bill;
    public Decimal gstPercentage { get; private set; }
    public Decimal gstAmount { get; private set; }
    public Decimal totalPrice { get; private set; }

    public PrintBillController(ApexPages.StandardController stdController) {
        this.bill = (Billing__c)stdController.getRecord();
        
        // Assuming a hypothetical 10% GST. Modify as necessary.
        this.gstPercentage = 10.0;
        
        this.gstAmount = this.bill.Product_Price__c * gstPercentage / 100;
        this.totalPrice = this.bill.Product_Price__c + gstAmount;
    }
}