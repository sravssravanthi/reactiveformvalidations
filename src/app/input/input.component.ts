import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  public logindata: FormGroup;
  login() {
    console.log(this.logindata.value);
    }
  ngOnInit() {
    this.logindata = this.fb.group({
      username: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
      password: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(8)]]
    });
  }

}
