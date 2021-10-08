import { SOCKET, ISocketType } from '../types/socketTypes';

const socketReducer = (state: any = null, action: ISocketType): any => {
  switch (action.type) {
    case SOCKET:
      return action.payload

    default:
      return state
  }
};

export default socketReducer;