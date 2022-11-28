import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Action, select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface';
import { AuthService } from '../../services/auth.service';
import { registerAction } from '../../store/actions/register.actions';
import { isSubmittingSelector } from '../../store/selectors';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  isSubmitting$: Observable<boolean>; //$ refers to observables

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private AuthService: AuthService
  ) {}

  ngOnInit(): void {
    this.initializeForm();
    this.initializeValues();
  }

  initializeForm(): void {
    // console.log('INITIALIZED');
    this.form = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    console.log('isSubmitting$', this.isSubmitting$);
  }
  // onSubmit():void{
  // if we had a service
  // this.authService.register(this.form.value)
  // .subscribe((res: any) => console.log((res)))
  //   console.log(this.form.value)
  // }
  onSubmit(): void {
    //getting form values(ngSubmit)
    console.log('submit', this.form.value, this.form.valid);
    this.store.dispatch(registerAction(this.form.value));
    this.AuthService.register(this.form.value).subscribe((currentUser: CurrentUserInterface) =>{
      console.log('currentUser', currentUser)
    });
  }
}
