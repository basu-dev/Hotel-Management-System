import { Component, ViewChild, ElementRef, OnDestroy, OnInit, Inject } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import * as $ from 'jquery';
import { inject } from '@angular/core/testing';

@Component({
    selector: 'app-header-component',
    encapsulation: ViewEncapsulation.None,
    templateUrl: './header.component.html',
    styleUrls:['./header.component.css']
})
export class HeaderComponent implements OnInit{

    public clicked=false;
public clickeditem:[];
public open(link){
    console.log(link);
    this.router.navigate([link])

}

    public clickedFunc(what){
        console.log(what);
    }
    ngOnInit(){
        $(document).ready(() => {
            const trees: any = $('[data-widget="tree"]');
            trees.tree();
          })
        
    }
    public pageName = 'Job';
    constructor(public router: Router,@Inject("NAVCOMPONENTS") public  items:any[] ) {
    }

   
    
}
