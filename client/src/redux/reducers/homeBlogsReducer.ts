import { GET_HOME_BLOGS, IGetHomeBlogsType, IHomeBlogs } from '../types/blogTypes';

const homeBlogsReducer = (
  state: IHomeBlogs[] = [],
  action: IGetHomeBlogsType
): IHomeBlogs[] => {
  switch (action.type) {
    case GET_HOME_BLOGS:
      return action.payload;
    default:
      return state;
  }
}

export default homeBlogsReducer;