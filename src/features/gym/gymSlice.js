import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    search: '',
    selectedCategorie: 'all',
    searchResult: [],
    categorie: [],
}
export const gymSlice = createSlice({
  name: 'gym',
  initialState,
  reducers: {
    setSearch:(state, action) => {
        state.search = action.payload
    },
    setSearchResult:(state, action) => {
        state.searchResult = action.payload.filter((item) => {
            if(item.bodyPart === state.selectedCategorie || state.selectedCategorie === 'all'){
                return item
            }
        })
    },
    setCategorie:(state, action) => {
        state.categorie = action.payload
    },
    setSelectedCategorie:(state, action) => {
        state.selectedCategorie = action.payload
    },
},
})

export const { setSearch ,setSearchResult,setCategorie ,setSelectedCategorie} = gymSlice.actions

export default gymSlice.reducer