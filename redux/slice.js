

import { createSlice } from '@reduxjs/toolkit'

const walletAddressSlice = createSlice({
    name: 'walletAddress',
    initialState: {
        walletAddress: null,
        // name: null,
        // home_address: null,
        // gd_link: null,
        // age: null,
        userDetails: null,
    },
    reducers: {
        setAddress: (state, action) => {
            state.walletAddress = action.payload;
        },
        clearAddress: (state) => {
            state.walletAddress = null;
        },
        setUserDetails: (state, action) => {
            state.userDetails = action.payload;
        }
    },
})

export const { setAddress, clearAddress, setUserDetails } = walletAddressSlice.actions

export default walletAddressSlice.reducer