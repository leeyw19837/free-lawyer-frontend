import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const fetchUser = createAsyncThunk(
    'user/fetchUser',
    async () => {
        const response = await new Promise(resolve =>
            setTimeout(()=>{
                resolve({
                    data: {
                        userName: 'leeyw19837',
                        userId: '12345678'
                    },
                    code: 200,
                    msg: null
                })
            }, 2000));
        return response;
    }
)

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: {},
        status: 'idle',
        error: null,
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
            localStorage.setItem('user', JSON.stringify(state.user));
        }
    },
    extraReducers: (builder) => {
        builder.addCase(
            fetchUser.pending, (state, action) => {
                state.status = 'loading';
                state.error = null;
            }
        ).addCase(
            fetchUser.fulfilled, (state, action) => {
                state.status = 'success';
                state.user = action.payload.data;
                localStorage.setItem('user', JSON.stringify(action.payload.data));
            }
        ).addCase(
            fetchUser.rejected, (state, action) => {
                state.status = 'failure';
                state.error = action.payload;
            }
        )
    }
})

export default userSlice.reducer;