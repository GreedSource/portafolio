export type ActionType = { type: "ADD_NOTE"; payload: string };

export const addNote = (note: string): ActionType => ({
  type: "ADD_NOTE",
  payload: note,
});
