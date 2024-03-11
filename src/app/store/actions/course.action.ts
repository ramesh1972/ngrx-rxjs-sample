import { Action } from '@ngrx/store';
import { CourseItem } from '../models/courseItem.model';

export enum CourseActionType {
  ADD_ITEM = '[COURSE] Add Course',
}

export class AddItemAction implements Action {
  readonly type = CourseActionType.ADD_ITEM;

  addCourseItemToBackEndDB() {
    // code to add course item to back end
    //   -- covert my model to dto
    //   -- call servie to call api to db passing the dto
    //      -- in backend update db or whatever BL
  }

  constructor(public payload: CourseItem) {}
}

export type CourseAction = AddItemAction;
