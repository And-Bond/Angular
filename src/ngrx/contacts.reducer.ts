import { contactsWrite } from './contacts.actions';
import { createReducer, on } from '@ngrx/store';

export const initialState = 0;

export const ContactsReducer = createReducer(
  initialState,
  on(contactsWrite, (state) => state + 1),

);