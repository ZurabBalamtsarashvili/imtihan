import { createSlice } from '@reduxjs/toolkit';
import { dispatch } from '../index';
import axios from '@/lib/axios';

const slice = createSlice({
    name: 'language',
    initialState: {
        isLoading: false,
        languages: [],
        language: null,
        meta: null,
    },

    reducers: {
        startLoading: state => {
            state.isLoading = true;
        },
        endLoading: state => {
            state.isLoading = false;
        },
        getLanguages: (state, action) => {
            state.isLoading = false;
            state.languages = action.payload.data;
            state.meta = {
                current_page: action.payload.current_page,
                last_page: action.payload.last_page,
                total: action.payload.total,
                links: action.payload.links,
                from: action.payload.from,
                to: action.payload.to,
            };
        },
        getLanguage: (state, action) => {
            state.isLoading = false;
            state.language = action.payload;
        },
        postLanguage: (state, action) => {
            state.isLoading = false;
            state.languages = [action.payload, ...state.languages];
        },
        updateLanguage: (state, action) => {
            state.isLoading = false;
            state.languages = [
                action.payload,
                ...state.languages.filter(
                    language => language.id !== action.payload.id,
                ),
            ];
        },
        deleteLanguage: (state, action) => {
            state.isLoading = false;
            state.languages = state.languages.filter(
                language => language.id !== action.payload.id,
            );
            state.meta.total = state.meta.total - 1;
        },
    },
});

export default slice.reducer;

export function getLanguages(page = 1, query = '') {
    return async () => {
        await dispatch(slice.actions.startLoading());
        try {
            const response = await axios.get(
                '/api/admin/languages?page=' + page + '&query=' + query,
            );
            dispatch(slice.actions.getLanguages(response.data));
        } finally {
            dispatch(slice.actions.endLoading());
        }
    };
}

export function getLanguage(id) {
    return async () => {
        await dispatch(slice.actions.startLoading());
        try {
            const response = await axios.get('/api/admin/languages/' + id);
            dispatch(slice.actions.getLanguage(response.data));
        } finally {
            dispatch(slice.actions.endLoading());
        }
    };
}

export function postLanguage(data) {
    return async () => {
        dispatch(slice.actions.startLoading());
        try {
            const response = await axios.post('/api/admin/languages/', data);
            dispatch(slice.actions.postLanguage(response.data));
        } finally {
            dispatch(slice.actions.endLoading());
        }
    };
}

export function updateLanguage(id, data) {
    return async () => {
        dispatch(slice.actions.startLoading());
        try {
            const response = await axios.put(
                '/api/admin/languages/' + id,
                data,
            );
            dispatch(slice.actions.updateLanguage(response.data));
        } finally {
            dispatch(slice.actions.endLoading());
        }
    };
}

export function deleteLanguage(id) {
    return async () => {
        dispatch(slice.actions.startLoading);
        try {
            const response = await axios.delete('/api/admin/languages/' + id);
            dispatch(slice.actions.deleteLanguage(response.data));
        } finally {
            dispatch(slice.actions.endLoading());
        }
    };
}
