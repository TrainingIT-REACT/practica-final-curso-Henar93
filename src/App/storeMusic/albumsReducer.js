import { getAlbums, getAlbumById ,getSongsByAlbum , getTopAlbums, getSongRep } from "./StoreMusic";


const initialState = {
    isLoading: false,
    error: false,
    albums: [], 
    album: null,
    songs: [],
    song: null
}

const reducer = (state = initialState, action) => {
    console.log(action.type);
    switch(action.type){
        case String(getAlbums.pending) || String(getAlbumById.pending) || String(getSongsByAlbum.pending) || 
        String(getTopAlbums.pending) || String(getSongRep.pending) : 
        return {
            ...state,
            isLoading: true,
            error: false
        };
        case String(getAlbums.fulfilled): 
        return {
            ...state,
            isLoading: false,
            error: false,
            albums: action.payload
        };
        case String(getTopAlbums.fulfilled): 
        return {
            ...state,
            isLoading: false,
            error: false,
            albums: action.payload
        };        
        case String(getAlbumById.fulfilled): 
        return {
            ...state,
            isLoading: false,
            error: false,
            album: action.payload
        };
        case String(getSongsByAlbum.fulfilled): 
        return {
            ...state,
            isLoading: false,
            error: false,
            songs: action.payload
        };
        case String(getSongRep.fulfilled): 
        return {
            ...state,
            isLoading: false,
            error: false,
            song: action.payload
        };
        case String(getAlbums.rejected) || String(getAlbumById.rejected) || String(getSongsByAlbum.rejected) || 
        String(getTopAlbums.rejected) || String(getSongRep.rejected) :
        return {
            ...state,
            isLoading: false,
            error: true
        };
        
        default: return state;
    }
}

export default reducer;