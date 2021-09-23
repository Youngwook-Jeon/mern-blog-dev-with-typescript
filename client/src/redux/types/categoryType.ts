import { ICategory } from '../../utils/TypeScript';

export const CREATE_CATEGORY = 'CREATE_CATEGORY'
export const GET_CATEGORIES = 'GET_CATEGORIES'

export interface ICreateCategory {
  type: typeof CREATE_CATEGORY;
  payload: ICategory;
}

export interface IGetCategories {
  type: typeof GET_CATEGORIES;
  payload: ICategory[];
}

export type ICategoryType = ICreateCategory | IGetCategories