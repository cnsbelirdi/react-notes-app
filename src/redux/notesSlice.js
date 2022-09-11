import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const colors = [
    {
        id : 1,
        name : "pink",
        isChecked : false
    },
    {
        id : 2,
        name : "purple",
        isChecked : false
    },
    {
        id : 3,
        name : "yellow",
        isChecked : false
    },
    {
        id : 4,
        name : "blue",
        isChecked : false
    },
    {
        id : 5,
        name : "green",
        isChecked : false
    }
  ];

export const getNoteAsync = createAsyncThunk ('notes/getNoteAsync', async () => {
    const res = await axios("https://631903916b4c78d91b347aa9.mockapi.io/notes");
    return res.data;
});
export const addNoteAsync = createAsyncThunk ('notes/addNoteAsync', async (data) => {
    const res = await axios.post("https://631903916b4c78d91b347aa9.mockapi.io/notes", data);
    return res.data;
});
export const deleteNoteAsync = createAsyncThunk ('notes/deleteNoteAsync', async(id) => {
    await axios.delete(`https://631903916b4c78d91b347aa9.mockapi.io/notes/${id}`);
    return id;
});
export const notesSlice = createSlice({
    name: 'notes',
    initialState: {
        colors,
        items : [],
        selectedColor : null,
        filteredItem: ""
    },
    reducers: {
        toggleCheck: (state, action) => {
            const {id}  = action.payload;
            const filtered = state.colors.find((color) => color.isChecked === true)
            if(typeof filtered != 'undefined') {
                filtered.isChecked = false;
            }
            const color = state.colors.find((color) => color.id === id);
            color.isChecked = true;
            state.selectedColor = color;
        },
        filterNote: (state, action) => {
            state.filteredItem = action.payload;
        }
    },
    extraReducers: {
        [getNoteAsync.fulfilled]: (state, action) => {
            state.items = action.payload;
        },
        [addNoteAsync.fulfilled]: (state, action) => {
            state.items.push(action.payload);
        },
        [deleteNoteAsync.fulfilled]: (state, action) => {
            const id = action.payload;
            const index = state.items.findIndex((item) => item.id === id);
            state.items.splice(index, 1);
        }
    }
});


export const selectFilteredNotes = (state) => {
    return state.notes.items.filter((item) => item.content.toLowerCase().includes(state.notes.filteredItem.toLowerCase()))
}

export const { toggleCheck, filterNote } = notesSlice.actions;
export default notesSlice.reducer;