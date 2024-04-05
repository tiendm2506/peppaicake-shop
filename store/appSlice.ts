import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { DataResponse, AppConfig } from './../models'
import { apiService } from './../services'

interface AppState {
  appConfig: AppConfig
}

const initialState: AppState = {
  appConfig: {
    mediaBaseUrl: '',
    mediaResizeUrl: ''
  }
}

export const getAppConfig = createAsyncThunk(
  'AppState/GET_APP_CONFIG',
  async (params, { rejectWithValue }) => {
    try {
      const response: DataResponse<AppConfig> = await apiService.get('/landing-page/v1/app/app-config')
      if (!response.success) {
        return rejectWithValue(response.data)
      }
      return response.data
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getAppConfig.fulfilled, (state, action) => {
      state.appConfig = action.payload as AppConfig
    })
  },
})

export default appSlice.reducer

export const appAction = appSlice.actions