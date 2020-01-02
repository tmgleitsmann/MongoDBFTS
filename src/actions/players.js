import axios from "axios";



const getTeamAPI = 'https://webhooks.mongodb-stitch.com/api/client/v2.0/app/ftssoccer-dinmy/service/get-team/incoming_webhook/get-team';
const postPlayerAPI = 'https://webhooks.mongodb-stitch.com/api/client/v2.0/app/ftssoccer-dinmy/service/team-player-post/incoming_webhook/team-player-post?';
const removePlayerAPI = 'https://webhooks.mongodb-stitch.com/api/client/v2.0/app/ftssoccer-dinmy/service/team-player-remove/incoming_webhook/team-player-remove?ID=';

export const updateTeamRedux = (player = {}, value) => {
    return{
        player, 
        value,
        type:"UPDATE_TEAM"
    };
}
export const updateTeam = (player = {}, value) => {
    if(player == {}){
        return;
    }
    return (dispatch) => {
        return axios
        .post(postPlayerAPI+'ID='+player.ID+'&value='+value)
        .then(() => {
            dispatch(updateTeamRedux(player, value));
        })
        .catch((res) => {return Promise.reject(res);});
    }
}

export const removePlayer = ( {ID} = {} ) => {
    if(ID !== undefined){
        return (dispatch) => {
            return axios
            .post(removePlayerAPI+ID)
            .then(() => {
                dispatch(removePlayerRedux(ID));
            })
            .catch((res) => {return Promise.reject(res);});
        }
    }
    else{
        return (dispatch) => {
            dispatch(removePlayerRedux(ID))
        }
    }
}

export const removePlayerRedux = (ID) => {
    return{
        ID,
        type:'REMOVE_PLAYER'
    };
}

export const preloadPlayers = () => {
    //api call here for players. 
    return (dispatch) => {
        return axios
        .get(getTeamAPI) //get the players through api req here.
        .then((req) => {
            req.data.forEach((player) =>{
                let index = player.value;
                dispatch(updateTeamRedux(player, index))
            })
        })
        .catch((res) => {return Promise.reject(res);});
    }
}