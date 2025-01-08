import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

// 登录：异步thunk(注意此处传参的方式！)
export const loginThunk = createAsyncThunk(
    'login/login',
    async (payload,{dispatch, getState}) => {
        console.log('loginThunk called: ', payload);
        const response = await new Promise((resolve, reject) => {
            setTimeout(() => {
                // 模拟登陆成功
                resolve({
                    data: {
                        token: 'temp_token',
                        // userInfo: {
                        //     username: 'user1',
                        //     userId: '00001234'
                        // }
                    },
                    code: 200,
                    msg: null,
                });
                // 设置用户信息
                dispatch({
                    type: 'user/setUser',
                    payload: {
                        userName: 'user1',
                        userId: '00001234'
                    },
                })

                // 模拟登陆失败
                // reject({
                //     code: 500,
                //     message: 'server error',
                //     data: null
                // })
            }, 2000)
        })
        return response;
    }
)

export const loginSlice = createSlice({
    name: "login",
    initialState: {
        loginData: {
            token: null,
        },
        status: 'idle',
        error: null,
    },
    reducers: {
        logout: (state, action) => {
            state.loginData = {
                token: null,
            }
            localStorage.removeItem('token');
            localStorage.removeItem('user');
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(
                loginThunk.pending, (state, action) => {
                    state.status = 'loading';
                    state.error = null
                })
            .addCase(
                loginThunk.fulfilled, (state, action) => {
                    state.status = 'success';
                    state.loginData = action.payload.data;
                    // 存储在 localStorage 中
                    localStorage.setItem('token', action.payload.data.token);
                }
            )
            .addCase(
                loginThunk.rejected, (state, action) => {
                    console.log('rejected:', action)
                    state.status = 'error';
                    state.error = action.error;
                })
    }
})

export default loginSlice.reducer;