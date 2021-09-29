import { GET_BLOGS_USER_ID, IBlogsUser, IGetBlogsUserType} from '../types/blogTypes';

const blogsUserReducer = (state: IBlogsUser[] = [], action: IGetBlogsUserType): IBlogsUser[] => {
  switch (action.type) {
    case GET_BLOGS_USER_ID:
      if (state.every(item => item.id !== action.payload.id)) {
        return [...state, action.payload];
      } else {
        return state.map(blog => (
          blog.id === action.payload.id ? action.payload : blog
        ))
      }
      

    default:
      return state;
  }
}

export default blogsUserReducer;