﻿import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { IWareHouse, IWareHouseType } from '../../../Model/WareHouse/WareHouse';
import { AccountTransactionTypeService } from '../../../Service/Inventory/account-trans-type.service';
import { DBOperation } from '../../../Shared/enum';
import { Global } from '../../../Shared/global';


@Component({
    selector: 'my-room-list',
    templateUrl: './warehouse.component.html'
})


export class WareHouseComponent implements OnInit {
    warehouses: IWareHouse[];
    warehouse: IWareHouse;
    warehousetypes: IWareHouseType[];
    warehousetype: IWareHouseType;
    msg: string;
    indLoading: boolean = false;
    private formSubmitAttempt: boolean;
    WarehouseFrm: FormGroup;
    dbops: DBOperation;
    modalTitle: string;
    modalBtnTitle: string;
    modalRef: BsModalRef;

    constructor(private fb: FormBuilder, private _warehouseServices: AccountTransactionTypeService, private modalService: BsModalService) {
        this._warehouseServices.getWareHouseType().subscribe(data => {
            
            this.warehousetype = data;
        });
    }

    ngOnInit(): void {
        this.WarehouseFrm = this.fb.group({
            Id: [''],
            Name: ['', Validators.required],
            WarehouseTypeId: ['', Validators.required],
            SortOrder: ['', Validators.required]
        });
        this.LoadRoom();
    }

    LoadRoom(): void {
        console.log(Global.BASE_WAREHOUSEAPI_ENDPOINT)
        this.indLoading = true;
        this._warehouseServices.get(Global.BASE_WAREHOUSEAPI_ENDPOINT)
            .subscribe(warehouses => {
                  
                this.warehouses = warehouses; this.indLoading = false;
            },
            error => this.msg = <any>error);
    }

    openModal(template: TemplateRef<any>) {

        this.dbops = DBOperation.create;
        this.SetControlsState(true);
        this.modalTitle = "Add New Room";
        this.modalBtnTitle = "Save & Submit";
        this.WarehouseFrm.reset();
        this.modalRef = this.modalService.show(template, { backdrop: 'static', keyboard: false });
    }

    editWareHouse(id:number, warehouseid: number,template: TemplateRef<any>) {
        console.log("ids"+id+" "+warehouseid);
        this.dbops = DBOperation.update;
        this.SetControlsState(true);
        this.modalTitle = "Edit Room";
        this.modalBtnTitle = "Update";
        this.warehouse = this.warehouses.filter(x => x.Id == id)[0];
        console.log(this.warehouse.Name);
        // this.WarehouseFrm.setValue(this.warehouse);
        this.modalRef = this.modalService.show(template, { backdrop: 'static', keyboard: false });
    }

    deleteWareHouse(id: number, template: TemplateRef<any>) {
        this.dbops = DBOperation.delete;
        this.SetControlsState(true);
        this.modalTitle = "Confirm to Delete?";
        this.modalBtnTitle = "Delete";
        this.warehouse = this.warehouses.filter(x => x.WarehouseTypeId == id)[0];
        this.WarehouseFrm.setValue(this.warehouse);
        this.modalRef = this.modalService.show(template, { backdrop: 'static', keyboard: false });
    }

    validateAllFields(formGroup: FormGroup) {
        Object.keys(formGroup.controls).forEach(field => {
            const control = formGroup.get(field);
            if (control instanceof FormControl) {
                control.markAsTouched({ onlySelf: true });
            } else if (control instanceof FormGroup) {
                this.validateAllFields(control);
            }
        });
    }

    onSubmit(formData: any) {
        this.msg = "";
        this.formSubmitAttempt = true;
        let WarehouseFrm = this.WarehouseFrm;

        if (WarehouseFrm.valid) {
            switch (this.dbops) {
                case DBOperation.create:
                    this._warehouseServices.post(Global.BASE_WAREHOUSEAPI_ENDPOINT,  formData.value).subscribe(
                        data => {
                              
                            if (data == 1) //Success
                            {
                                alert("Data successfully added.");
                                this.LoadRoom();
                                this.modalRef.hide();
                                this.formSubmitAttempt = false;
                            }
                            else {
                                alert("There is some issue in saving records, please contact to system administrator!");
                            }
                        },
                        error => {
                            this.msg = error;
                        }
                    );
                    break;
                case DBOperation.update:
                      
                    this._warehouseServices.put(Global.BASE_WAREHOUSEAPI_ENDPOINT,  formData.value.Id,  formData.value).subscribe(
                        data => {
                              
                            if (data == 1) //Success
                            {
                                alert("Data successfully updated.");
                                this.modalRef.hide();
                                this.formSubmitAttempt = false;
                                this.LoadRoom();
                            }
                            else {
                                alert("There is some issue in updating records, please contact to system administrator!");
                            }
                        },
                        error => {
                            this.msg = error;
                        }
                    );
                    break;
                case DBOperation.delete:
                      
                    this._warehouseServices.delete(Global.BASE_WAREHOUSEAPI_ENDPOINT,  formData.value.Id).subscribe(
                        data => {
                            if (data == 1) //Success
                            {
                                alert("Data successfully deleted.");
                                this.modalRef.hide();
                                this.formSubmitAttempt = false;
                                this.LoadRoom();
                            }
                            else {
                                alert("There is some issue in deleting records, please contact to system administrator!");
                            }

                            //this.modal.dismiss();
                        },
                        error => {
                            this.msg = error;
                        }
                    );
                    break;
            }
        }
        else {
            this.validateAllFields(WarehouseFrm);
        }
    }
    SetControlsState(isEnable: boolean) {
        isEnable ? this.WarehouseFrm.enable() : this.WarehouseFrm.disable();
    }

}
