import { createAsyncAction } from 'redux-promise-middleware-actions';

export const getAlbums = createAsyncAction('ALBUMS', async () => {
    const res = await fetch('http://localhost:3001/albums');
    return await res.json();
});

export const getAlbumById = createAsyncAction('ALBUM', async (id) => {
    const res = await fetch('http://localhost:3001/albums/'+id);
    return await res.json();
});

export const getSongsByAlbum = createAsyncAction('SONGS', async (id) => {
    const res = await fetch('http://localhost:3001/songs?album_id='+id);
    return await res.json();
});
export const getTopAlbums = createAsyncAction('ALBUMS', async () => {
    const res = await fetch('http://localhost:3001/albums?_start=0&_limit=3');
    return await res.json();
});

export const getSongRep = createAsyncAction('SONGS', async (id) => {
    const res = await fetch('http://localhost:3001/SONGS/'+id);
    return await res.json();
});


