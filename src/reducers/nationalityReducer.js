const DEFAULT_STATE = [];

export default (state = DEFAULT_STATE, action) => {
    switch(action.type){
        case 'SUBMIT':
            return {...state};
        case 'RESET':
            return [];
        default:
            return state;
    }
};