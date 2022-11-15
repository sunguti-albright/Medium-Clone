import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store'; 
import { Observable } from 'rxjs';

import { registerAction } from '../../store/actions';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  isSubmitting$ : Observable<boolean>
  constructor(private fb: FormBuilder, private store: Store) {}

  ngOnInit(): void {
    this.initializeForm();
    this.initializeValues();
  }

  initializeForm(): void {
    // console.log('INITIALIZED');
    this.form = this.fb.group({
      username: ['',Validators.required],
      email: ['',Validators.required],
      password: ['',Validators.required]
    });
  }

  initializeValues():void{
    
  }
  // onSubmit():void{
    // if we had a service
    // this.authService.register(this.form.value)
    // .subscribe((res: any) => console.log((res)))
  //   console.log(this.form.value)
  // }

  //dispatch is used for actions
  onSubmit():void {
    console.log(this.form.value)
   this.store.dispatch(registerAction(this.form.value));

  }
}
