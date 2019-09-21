import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  private employeeId: string;
  private employeePassword: string;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private loginService: LoginService
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      emplyeeId: ['', Validators.required],
      employeePassword: ['', Validators.required]
    });
  }

  submitForm(): void {
    if (this.loginForm.invalid) {
      return;
    }
    this.loginService.setEmployeeId(this.loginForm.get('emplyeeId').value);
    this.router.navigate(['dashboard', this.loginForm.get('emplyeeId').value], {
      state: {
        emplyeeId:
          this.employeeId
      }
    });
  }
}
