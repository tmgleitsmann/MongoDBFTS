const DEFAULT_OBJ = { 
    Name:'', 
    ID: '-1',
    Overall:undefined, 
    Jersey:undefined, 
    Club:undefined,
    Nationality:undefined,
    Speed:undefined,
    Finishing:undefined,
    Strength:undefined,
    Dribbling:undefined,
    Age:undefined,
    Weight:undefined,
    Height:undefined,
    Skill:undefined,
    Photo:undefined,
    Flag:undefined,
    Select:false
}
const DEFAULT_STATE = new Array(11)
    .fill().map(u => (DEFAULT_OBJ));


export default (state = DEFAULT_STATE, action) => {
    switch(action.type){
        case 'UPDATE_TEAM':
            state.forEach( (player, index) => {
                if(index == action.value){
                    state[index] = action.player;
                }
            });
            return state;
            
        case 'REMOVE_PLAYER':
            state.forEach( (player, index) => {
                if(player.ID == action.ID){ 
                    state[index] = DEFAULT_OBJ;
                }
            });
            return state;

        case 'RESET':
            return { ...DEFAULT_STATE, method:action.type, error:'' };
        default:
            return state;
    }
};