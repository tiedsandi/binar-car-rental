import {
    createSlice,
    createAsyncThunk,
    // createEntityAdapter
} from "@reduxjs/toolkit";
import BinarService from "../api/ApiCarService";

export const fetchCars = createAsyncThunk(
    "cars/fetchCars",
    async (filter, thunkAPI) => {
        const response = await BinarService.getAll();
        return response.data;
    }
);

export const fetchCar = createAsyncThunk(
    "cars/fetchCar",
    async (id, thunkAPI) => {
        const response = await BinarService.getById(id);
        return response.data;
    }
);

export const createCar = createAsyncThunk(
    "cars/createCar",
    async (data, thunkAPI) => {
        const response = await BinarService.create(data);
        return response.data;
    }
);

export const updateCar = createAsyncThunk(
    "cars/updateCar",
    async (data, thunkAPI) => {
        const response = await BinarService.update(data.id, data);
        return response.data;
    }
);

export const removeCar = createAsyncThunk(
    "cars/removeCar",
    async (id, thunkAPI) => {
        const response = await BinarService.remove(id);
        return response.datas;
    }
);

const initialState = {
    cars: [],
    loading: false,
    error: null
};

// const carsAdapter = createEntityAdapter({
//     selectId: (car) => car.id,
//     sortComparer: (a, b) => b.id.localeCompare(a.id)
// });

const carsSlice = createSlice({
    name: "cars",
    // initialState: carsAdapter.getInitialState(initialState),
    initialState,
    reducers: {},
    extraReducers:
    {
        [fetchCars.pending]: (state, action) => {
            console.log("Pending")
            return {
                ...state,
                loading: true,
                error: null
            };
        }
        ,
        [fetchCars.fulfilled]: (state, action) => {
            console.log("Fulfilled")
            return {
                ...state,
                loading: false,
                cars: action.payload
            };
        }
        ,
        [fetchCars.rejected]: (state, action) => {
            console.log("Rejected")
            return {
                ...state,
                loading: false,
                error: action.error
            };
        }
        ,
        [fetchCar.pending]: (state, action) => {
            return {
                ...state,
                loading: true,
                error: null
            };
        }
        ,
        [fetchCar.fulfilled]: (state, action) => {
            return {
                ...state,
                loading: false,
                cars: action.payload
            };
        }
        ,
        [fetchCar.rejected]: (state, action) => {
            return {
                ...state,
                loading: false,
                error: action.error
            };
        }
        ,
        [createCar.pending]: (state, action) => {
            return {
                ...state,
                loading: true,
                error: null
            };
        }
        ,
        [createCar.fulfilled]: (state, action) => {
            return {
                ...state,
                loading: false,
                cars: action.payload
            };
        }
        ,
        [createCar.rejected]: (state, action) => {
            return {
                ...state,
                loading: false,
                error: action.error
            };
        }
        ,
        [updateCar.pending]: (state, action) => {
            return {
                ...state,
                loading: true,
                error: null
            };
        }
        ,
        [updateCar.fulfilled]: (state, action) => {
            return {
                ...state,
                loading: false,
                cars: action.payload
            };
        }
        ,
        [updateCar.rejected]: (state, action) => {
            return {
                ...state,
                loading: false,
                error: action.error
            };
        }
        ,
        [removeCar.pending]: (state, action) => {
            return {
                ...state,
                loading: true,
                error: null
            };
        }
        ,
        [removeCar.fulfilled]: (state, action) => {
            return {
                ...state,
                loading: false,
                cars: action.payload
            };
        }
        ,
        [removeCar.rejected]: (state, action) => {
            return {
                ...state,
                loading: false,
                error: action.error
            };
        }
    }
});

// export const getCars = (state) => carsAdapter.getSelectors().selectAll(state.cars);

export const getCars = (state) => state.cars.cars;
export const getCarLoading = (state) => state.cars.loading;
export const getCarsError = (state) => state.cars.error;

export default carsSlice.reducer;