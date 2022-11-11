import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, IFreelancer, ACTIONS } from '../freelancers.reducer';
import * as Rx from 'rxjs'

@Component({
  selector: 'app-freelancer-grid',
  templateUrl: './freelancer-grid.component.html',
  styleUrls: ['./freelancer-grid.component.css']
})
export class FreelancerGridComponent implements OnInit {
public freelancers : Rx.Observable<Array<IFreelancer>>;

  constructor(private store : Store<AppState>) { 
    this.freelancers = store.select('freelancers');
  }
  
  delete(freelancer: any) {
    this.store.dispatch({
      type: ACTIONS.DELETE_FREELANCER,
      payload: freelancer,
    })
  }
  ngOnInit(): void {
  }

}
