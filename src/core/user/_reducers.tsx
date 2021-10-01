import { ActionType } from "./_actions";

export interface NoteState {
  notes: string[];
}

export const initialState: NoteState = {
  notes: [],
};

export const userReducer = (
  state: NoteState = initialState,
  action: ActionType
) => {
  switch (action.type) {
    case "ADD_NOTE":
      return {
        ...state,
        notes: [...state.notes, action.payload],
      };
    default:
      return state;
  }
};

export default userReducer;
