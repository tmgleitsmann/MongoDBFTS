

export const updateTeam = (player = {}, value) => {
    console.log('players.js player', player);
    console.log('players.js value', value)
    return{
        player, 
        value,
        type:"UPDATE_TEAM"
    };
}

export const removePlayer = ( { Name } = {}) => {
    console.log(Name);
    return{
        Name,
        type:'REMOVE_PLAYER'
    };
}