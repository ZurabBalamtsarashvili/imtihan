import { createSlice } from '@reduxjs/toolkit';
import { dispatch } from '../index';
import axios from '@/lib/axios';

const slice = createSlice({
    name: 'company',
    initialState: {
        isLoading: false,
        companies: [],
        company: null,
    },
    reducers: {
        startLoading: state => {
            state.isLoading = true;
        },
        endLoading: state => {
            state.isLoading = false;
        },
        getCompanies: (state, action) => {
            state.isLoading = false;
            state.companies = action.payload;
        },
        getCompany: (state, action) => {
            state.isLoading = false;
            state.company = action.payload;
        },
        postCompany: (state, action) => {
            state.isLoading = false;
            state.companies = action.payload;
        },
        updateCompany: (state, action) => {
            state.isLoading = false;
            state.companies = [
                ...action.payload,
                ...state.companies.filter(
                    company => company.id !== action.payload.id,
                ),
            ];
        },
        deleteCompany: (state, action) => {
            state.isLoading = false;
            state.companies = state.companies.filter(
                company => company.id !== action.payload,
            );
        },
    },
});

export default slice.reducer;

export function getCompanies() {
    return async () => {
        dispatch(slice.actions.startLoading);
        try {
            const response = await axios.get('/api/admin/companies');
            dispatch(slice.actions.getCompanies(response.data.data));
        } finally {
            dispatch(slice.actions.endLoading);
        }
    };
}

export function getCompany(id) {
    return async () => {
        dispatch(slice.actions.startLoading);
        try {
            const response = await axios.get('/api/admin/companies/' + id);
            dispatch(slice.actions.getCompany(response.data.data));
        } finally {
            dispatch(slice.actions.endLoading);
        }
    };
}

export function updateCompany(id, data) {
    return async () => {
        dispatch(slice.actions.startLoading);
        try {
            const response = await axios.put(
                '/api/admin/companies/' + id,
                data,
            );
            dispatch(slice.actions.deleteCompany(response.data.data));
        } finally {
            dispatch(slice.actions.endLoading);
        }
    };
}

export function deleteCompany(id) {
    return async () => {
        dispatch(slice.actions.startLoading);
        try {
            const response = await axios.delete('/api/admin/companies/' + id);
            dispatch(slice.actions.postCompany(response.data.data));
        } finally {
            dispatch(slice.actions.endLoading);
        }
    };
}
