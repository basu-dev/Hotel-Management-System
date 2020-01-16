import { Component, OnInit, ViewChild,TemplateRef } from '@angular/core';
import { LoginService } from '../../Service/login.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { IUser } from '../../Model/User/user';
import { Observable } from 'rxjs';
import { Global } from '../../Shared/global';
import { DBOperation } from '../../Shared/enum';
import { AuthenticationService } from '../../Service/authentication.service';


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
        this.authenticationSevice.login(Global.BASE_HOST_ENDPOINT+Global.BASE_LOGIN_ENDPOINT, loginfrm.value).subscribe(
                data => {
                    debugger;
                    if (data != 0) {
                        alert("User Logged in successfully.");
                        this.router.navigate(['/dashboard']);
                    } else {
                        alert("Login failed");
                    }
                },
                error => {
                    console.log(Global.BASE_LOGIN_ENDPOINT);
                    alert("Login failed");
                }
            );
    }
}