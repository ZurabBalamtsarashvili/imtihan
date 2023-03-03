import { createSlice } from '@reduxjs/toolkit';
import { dispatch } from '../index';
import axios from '@/lib/axios';

const slice = createSlice({
    name: 'announcement',
    initialState: {
        isLoading: false,
        announcements: [],
        announcement: null,
        meta: null,
    },

    reducers: {
        startLoading: state => {
            state.isLoading = true;
        },
        endLoading: state => {
            state.isLoading = false;
        },
        getAnnouncements: (state, action) => {
            state.isLoading = false;
            state.announcements = action.payload.data;
            state.meta = {
                current_page: action.payload.current_page,
                last_page: action.payload.last_page,
                total: action.payload.total,
                links: action.payload.links,
                from: action.payload.from,
                to: action.payload.to,
            };
        },
        getAnnouncement: (state, action) => {
            state.isLoading = false;
            state.announcement = action.payload;
        },
        postAnnouncement: (state, action) => {
            state.isLoading = false;
            state.announcements = [action.payload, ...state.announcements];
        },
        updateAnnouncement: (state, action) => {
            state.isLoading = false;
            state.announcements = [
                action.payload,
                ...state.announcements.filter(
                    announcement => announcement.id !== action.payload.id,
                ),
            ];
        },
        deleteAnnouncement: (state, action) => {
            state.isLoading = false;
            state.announcements = state.announcements.filter(
                announcement => announcement.id !== action.payload.id,
            );
            state.meta.total = state.meta.total - 1;
        },
    },
});

export default slice.reducer;

export function getAnnouncements(page = 1, query = '') {
    return async () => {
        await dispatch(slice.actions.startLoading());
        try {
            const response = await axios.get(
                '/api/admin/announcements?page=' + page + '&query=' + query,
            );
            dispatch(slice.actions.getAnnouncements(response.data));
        } finally {
            dispatch(slice.actions.endLoading());
        }
    };
}

export function getAnnouncement(id) {
    return async () => {
        await dispatch(slice.actions.startLoading());
        try {
            const response = await axios.get('/api/admin/announcements/' + id);
            dispatch(slice.actions.getAnnouncement(response.data));
        } finally {
            dispatch(slice.actions.endLoading());
        }
    };
}

export function postAnnouncement(data) {
    return async () => {
        dispatch(slice.actions.startLoading());
        try {
            const response = await axios.post(
                '/api/admin/announcements/',
                data,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                },
            );
            dispatch(slice.actions.postAnnouncement(response.data));
        } finally {
            dispatch(slice.actions.endLoading());
        }
    };
}

export function updateAnnouncement(id, data) {
    return async () => {
        dispatch(slice.actions.startLoading());
        try {
            const response = await axios.put(
                '/api/admin/announcements/' + id,
                data,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                },
            );
            dispatch(slice.actions.updateAnnouncement(response.data));
        } finally {
            dispatch(slice.actions.endLoading());
        }
    };
}

export function deleteAnnouncement(id) {
    return async () => {
        dispatch(slice.actions.startLoading);
        try {
            const response = await axios.delete(
                '/api/admin/announcements/' + id,
            );
            dispatch(slice.actions.deleteAnnouncement(response.data));
        } finally {
            dispatch(slice.actions.endLoading());
        }
    };
}
