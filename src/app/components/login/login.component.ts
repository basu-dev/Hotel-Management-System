import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { AuthenticationService } from '../../Service/authentication.service';
import { LoginService } from '../../Service/login.service';
import { DBOperation } from '../../Shared/enum';
import { Global } from '../../Shared/global';


@Component({
    selector:'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
})

export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    msg: string;
    returnUrl: string;
    dbops: DBOperation;
    form: FormGroup;
    private formSubmitAttempt: boolean;

    constructor(
        private fb: FormBuilder,
        private loginService: LoginService,
        private authenticationSevice: AuthenticationService,
        private route: ActivatedRoute,
        private router: Router,
        private authService:AuthenticationService
      
    ) { }

    ngOnInit() {
        this.form = this.fb.group({
            UserName: ['', Validators.required],
            Password: ['', Validators.required],
            Remember: ['']
        });
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
    onSubmit() {
        let loginfrm = this.form;
        
        this.authenticationSevice.login(Global.BASE_LOGIN_ENDPOINT, loginfrm.value).subscribe(
                (data) => {
                    
                    if (data!= null ) {
                        localStorage.setItem("userToken",data.Token);
                        this.authService.authenticate();
                        this.router.navigate(["/reservation"]);
                        window.location.reload();
                    } else {
                        alert("Login failed no data");
                    }
                },
                error => {
                    alert("Login failed");
                    console.log(error);
                }
            );
    }
}