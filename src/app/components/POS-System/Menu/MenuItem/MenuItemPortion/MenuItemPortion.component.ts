import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { BillingService } from '../../../../../Service/Billing/billing.service';
import { IInventoryItem } from '../../../../../Model/Inventory/InventoryItem';

@Component({
    //moduleId: module.id,
    selector: 'inventoryIssue',
    templateUrl: './MenuItemPortion.component.html'
})
export class InventoryIssueDetailsComponent {
    @Input('group')
    public MenuItemPortionForm: FormGroup;
    constructor() {}

    calculateAmount(data) {
        // Temporary workaround
        return 0;
    }

    
}