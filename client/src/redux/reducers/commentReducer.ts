import { CREATE_COMMENT, GET_COMMENTS, ICommentState, ICommentType } from '../types/commentTypes';

const initialState = {
  data: [],
  total: 1
};

const commentReducer = (
  state: ICommentState = initialState,
  action: ICommentType
): ICommentState => {
  switch (action.type) {
    case CREATE_COMMENT:
      return {
        ...state,
        data: [action.payload, ...state.data]
      };

    case GET_COMMENTS:
      return action.payload;

    default:
      return state;
  }
}

export default commentReducer;