import types from './types';

export const updateName = (name) => ({
  type: types.UPDATE_NAME,
  name
});



export const addSongToHistory = (song) => ({
  type: types.ADD_TO_HISTORY,
  song
});
