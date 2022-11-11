import { Action } from '@ngrx/store';

export interface AppState {
    freelancers : Array<IFreelancer>
}

export interface IFreelancer {
    name: string,
    email: string,
    thumbnail: string
}


export const ACTIONS = {
    FREELANCERS_LOADED: 'FREELANCERS_LOADED',
    DELETE_FREELANCER: 'DELETE_FREELANCER',
 
}

const initialState = { name: '', email: '' };

export function freelancersReducer(
    state: Array<IFreelancer> = [],
    action: Action): Array<IFreelancer> {
    switch (action.type) {
        case ACTIONS.FREELANCERS_LOADED:
            // Return the new state with the payload as freelancers list
            return Array.prototype.concat(action.payload);
            //remove element from freelance array
        case ACTIONS.DELETE_FREELANCER:
            state.splice(state.indexOf(action.payload),1) ;  
            return Array.prototype.concat(state)
        default:
            return state;
    }
}
