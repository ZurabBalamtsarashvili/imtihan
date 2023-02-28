import { combineReducers } from 'redux';
// slices
import companyAr from './slices/company';
import languageAr from './slices/language';

// ----------------------------------------------------------------------

const rootReducer = combineReducers({
    company: companyAr,
    language: languageAr,
});

export { rootReducer };
