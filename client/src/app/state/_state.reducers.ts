import { ActionReducerMap } from '@ngrx/store';

import { State } from './_state.interfaces';
import * as fromAuth from './auth.reducer';
import * as fromBook from './book.reducer';
import * as fromBookshelf from './bookshelf.reducer';
import * as fromPlan from './plan.reducer';
import * as fromSkill from './skill.reducer';

export const reducers: ActionReducerMap<State> = {
  auth: fromAuth.reducer,
  book: fromBook.reducer,
  bookshelf: fromBookshelf.reducer,
  plan: fromPlan.reducer,
  skill: fromSkill.reducer
};
