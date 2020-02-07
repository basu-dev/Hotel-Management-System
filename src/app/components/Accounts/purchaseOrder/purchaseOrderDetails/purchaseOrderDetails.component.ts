import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { InventoryItem } from '../../../../Model/Inventory/inventoryItem';
import { Observable } from 'rxjs/Rx';
import { AccountTransactionTypeService } from 'src/app/Service/Inventory/account-trans-type.service';
@Component({
    selector: 'my-purchaseOrderDetail-list',
    templateUrl: './purchaseOrderDetails.component.html'
})
export class PurchaseOrderDetailComponent {
    @Input('group')
    public pOrderDetails: FormGroup;
    public inventoryItem: InventoryItem[];
    public formSubmitAttempt: boolean;

    constructor(private _purchaseOrderService: AccountTransactionTypeService
) {
        this._purchaseOrderService.getInventoryItems().subscribe(data => { this.inventoryItem = data });
    }

    // calculate amount
    calculateAmount(pOrderDetails: any) {
        debugger;
        return pOrderDetails.PurchaseOrderAmount.setValue(pOrderDetails.Quantity.value * pOrderDetails.PurchaseOrderRate.value);
    }


}