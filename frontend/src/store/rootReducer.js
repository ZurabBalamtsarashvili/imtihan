import { combineReducers } from 'redux';
// slices
import companyAr from './slices/company';

// ----------------------------------------------------------------------

const rootReducer = combineReducers({
    company: companyAr,
});

export { rootReducer };
