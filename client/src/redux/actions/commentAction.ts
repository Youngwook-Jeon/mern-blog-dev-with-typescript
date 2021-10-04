import { Dispatch } from 'redux';
import { ALERT, IAlertType } from '../types/alertTypes';
import { IComment } from '../../utils/TypeScript';
import { postAPI } from '../../utils/FetchData';
import { CREATE_COMMENT, ICreateCommentType } from '../types/commentTypes';

export const createComment = (data: IComment, token: string) => 
  async (dispatch: Dispatch<IAlertType | ICreateCommentType>) => {
    try {
      const res = await postAPI('comment', data, token);
      dispatch({
        type: CREATE_COMMENT,
        payload: { ...res.data, user: data.user }
      });
    } catch (err: any) {
      dispatch({ type: ALERT, payload: { errors: err.response.data.msg }});
    }
} 