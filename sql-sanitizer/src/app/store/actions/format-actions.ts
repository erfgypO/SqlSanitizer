import { createAction, props } from '@ngrx/store';
import { FormatRequest } from 'src/app/models/format-request';

export const format = createAction(
  '[Format]',
  props<{requestBody: FormatRequest}>()
);
