const DEFAULT_STATE = {
    minPace:1,
    maxPace:99,
    minShooting:1,
    maxShooting:99,
    minPassing:1,
    maxPassing:99,
    minDribbling:1,
    maxDribbling:99,
    minDefending:1,
    maxDefending:99,
    minPhysical:1,
    maxPhysical:99,
    playerName:'',
    searchType:'',
    playerPayload:[],
    position:'',
    error:undefined
}

export default (state = DEFAULT_STATE, action) => {
    switch(action.type){
        case 'SEARCH':
            return {...action, method:action.searchType, error:''};
        case 'RESET':
            return { ...DEFAULT_STATE, method:action.type, error:'' };
        default:
            return state;
    }
};
