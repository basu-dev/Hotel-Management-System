﻿import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import {tableService } from '../../../Service/Billing/table.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Table } from '../../../Model/table.model';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { DBOperation } from '../../../Shared/enum';
import { Observable } from 'rxjs/Rx';
import { Global } from '../../../Shared/global';
// Services
import { TableStoreService } from '../../../Service/Billing/table.store.service';

@Component({
    selector: 'my-table-list',
    templateUrl: './table.component.html'
})
export class TableComponent implements OnInit {
    tables: Table[];
    table: Table;
    msg: string;
    indLoading: boolean = false;
    private formSubmitAttempt: boolean;
    TableForm: FormGroup;
    dbops: DBOperation;
    modalTitle: string;
    modalBtnTitle: string;
    modalRef: BsModalRef;

    constructor(
        private fb: FormBuilder, 
        private _tableService:tableService,
        private _tableStoreService: TableStoreService, 
        private modalService: BsModalService
    ) { }

    ngOnInit(): void {
        this.TableForm = this.fb.group({
            Id: [''],
            Name: ['', Validators.required]
        });
        this.LoadTable();
    }

    LoadTable(): void {
        this._tableStoreService.loadAllTables();
        this.indLoading = true;
        this._tableService.get(Global.BASE_TABLEAPI_ENDPOINT)
            .subscribe(tables => { this.tables = tables; this.indLoading = false; },
            error => this.msg = <any>error);
    }
    openModal(template: TemplateRef<any>) {

        this.dbops = DBOperation.create;    
        this.SetControlsState(true);
        this.modalTitle = "Add New Table";
        this.modalBtnTitle = "Save";
        this.TableForm.reset();
        this.modalRef = this.modalService.show(template, { backdrop: 'static', keyboard: false });
    }

    editTable(id: number, template: TemplateRef<any>) {
        this.dbops = DBOperation.update;
        this.SetControlsState(true);
        this.modalTitle = "Edit Table";
        this.modalBtnTitle = "Update";
        this.table = this.tables.filter(x => x.Id == id)[0];
        this.TableForm.setValue(this.table);
        this.modalRef = this.modalService.show(template, { backdrop: 'static', keyboard: false });
    }

    deleteTable(id: number, template: TemplateRef<any>) {
        this.dbops = DBOperation.delete;
        this.SetControlsState(true);
        this.modalTitle = "Confirm to Delete?";
        this.modalBtnTitle = "Delete";
        this.table = this.tables.filter(x => x.Id == id)[0];
        this.TableForm.setValue(this.table);
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
        let tablefrm = this.TableForm;

        if (tablefrm.valid) {
            switch (this.dbops) {
                case DBOperation.create:
                    this._tableService.post(Global.BASE_TABLEAPI_ENDPOINT, formData._value).subscribe(
                        data => {
                            if (data == 1) //Success
                            {
                                alert("Table successfully added.");
                                this.LoadTable();
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
                    this._tableService.put(Global.BASE_TABLEAPI_ENDPOINT, formData._value.Id, formData._value).subscribe(
                        data => {
                            if (data == 1) //Success
                            {
                                alert("Table successfully updated.");
                                this.modalRef.hide();
                                this.LoadTable();
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
                case DBOperation.delete:
                    this._tableService.delete(Global.BASE_TABLEAPI_ENDPOINT, formData._value.Id).subscribe(
                        data => {
                            if (data == 1) //Success
                            {
                                alert("Table successfully deleted.");
                                this.modalRef.hide();
                                this.formSubmitAttempt = false;
                                this.LoadTable();

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
            }
        }
        else {
            this.validateAllFields(tablefrm);
        }
    }
    SetControlsState(isEnable: boolean) {
        isEnable ? this.TableForm.enable() : this.TableForm.disable();
    }

}