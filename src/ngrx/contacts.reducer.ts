import { contactsWrite } from './contacts.actions';
import { createReducer, on } from '@ngrx/store';

export const initialState = [{name: 'Andrey',tel:"12324"}];

export const ContactsReducer = createReducer(
  initialState,
  on(contactsWrite, (contacts) => contacts),

);