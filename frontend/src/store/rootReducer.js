import { combineReducers } from 'redux';
// slices
import companyAr from './slices/company';
import languageAr from './slices/language';
import announcementAr from './slices/announcement';

// ----------------------------------------------------------------------

const rootReducer = combineReducers({
    company: companyAr,
    language: languageAr,
    announcement: announcementAr,
});

export { rootReducer };
