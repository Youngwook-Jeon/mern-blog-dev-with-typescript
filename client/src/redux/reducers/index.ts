import { combineReducers } from 'redux';
import auth from './authReducer';
import alert from './alertReducer';
import category from './categoryReducer';
import homeBlogs from './homeBlogsReducer';
import blogsCategory from './blogsCategoryReducer';

export default combineReducers({
  auth,
  alert,
  category,
  homeBlogs,
  blogsCategory
})