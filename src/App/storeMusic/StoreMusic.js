import { createAsyncAction } from 'redux-promise-middleware-actions';

export const getAlbums = createAsyncAction('ALBUMS', async () => {
    const res = await fetch('http://localhost:3001/albums');
    return await res.json();
});

export const getAlbumById = createAsyncAction('ALBUM', async (id) => {
    const res = await fetch('http://localhost:3001/albums/'+5);
    return await res.json();
});

export const getSongsByAlbum = createAsyncAction('SONGS', async (id) => {
    const res = await fetch('http://localhost:3001/songs'+5);
    return await res.json();
});
