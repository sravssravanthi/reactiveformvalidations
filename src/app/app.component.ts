import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'reactiveform-validations';
  constructor(private fb: FormBuilder){}
  public logindata: FormGroup;
  login() {
    console.log(this.logindata.value);
    }
  ngOnInit(){
    this.logindata = this.fb.group({
      username: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
      password: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(8)]]
    });
  }
}
