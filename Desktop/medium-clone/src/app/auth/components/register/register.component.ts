import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Action, Store } from '@ngrx/store'; 
import { registerAction } from '../../store/actions';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder, private store: Store) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    // console.log('INITIALIZED');
    this.form = this.fb.group({
      username: ['',Validators.required],
      email: ['',Validators.required],
      password: ['',Validators.required]
    });
  }
  // onSubmit():void{
    // if we had a service
    // this.authService.register(this.form.value)
    // .subscribe((res: any) => console.log((res)))
  //   console.log(this.form.value)
  // }
  onSubmit():void {
    //gwtting form values(ngSubmit)
    console.log("submit",this.form.value, this.form.valid)
   this.store.dispatch(registerAction(this.form.value));

  }
}
