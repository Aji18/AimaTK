import { Reducer } from 'redux';
import { EInstituteActionTypes, IInstituteState} from './types';

const initialState: IInstituteState = {
    data: {
        name: '',
        status: '',
        statisticNumber: '',
        NPSNNumber: '',
        establishedDate: '',
        address: '',
        emailOrWeb: '',
        accreditation: '',
        qualityAssurance: '',
    },
    loading: false,
    errors : undefined
};

const reducer: Reducer<IInstituteState> = (state = initialState, action) => {
    switch (action.type) {
        case EInstituteActionTypes.FETCH_REQUEST_INSTITUTE:
        case EInstituteActionTypes.ADD_REQUEST_INSTITUTE:
            return {
                ...state,
                loading: true,
            };
        case EInstituteActionTypes.UPDATE:
        case EInstituteActionTypes.FETCH_SUCCESS_INSTITUTE:
        case EInstituteActionTypes.ADD_SUCCESS_INSTITUTE:
            return {
                ...state,
                loading: false,
                data: action.payload.data,
            };
        case EInstituteActionTypes.FETCH_ERROR_INSTITUTE:
        case EInstituteActionTypes.ADD_ERROR_INSTITUTE:
            return {
                ...state,
                loading: false,
                errors: action.payload.message,
            };
        default:
            return state;
    }
};
export { reducer as instituteReducer };