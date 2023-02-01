import {configureStore, createSlice} from '@reduxjs/toolkit'

let home = createSlice({
    name: 'home',
    initialState: true,
    reducers: {
        changeHomeStateTrue(state) {
            return state = true;
        },
        changeHomeStateFalse(state) {
            return state = false;
        }
    }
});
export default configureStore({
    reducer: {
        home: home.reducer,
    }
});
export let {changeHomeStateFalse, changeHomeStateTrue} = home.actions;
