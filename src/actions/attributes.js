import axios from "axios";

const autocompleteApiUrl = 'https://webhooks.mongodb-stitch.com/api/client/v2.0/app/ftssoccer-dinmy/service/get-player-basic/incoming_webhook/get-player-basic';
const fuzzyApiUrl = 'https://webhooks.mongodb-stitch.com/api/client/v2.0/app/ftssoccer-dinmy/service/get-player-fuzzy/incoming_webhook/get-player-fuzzy';
const wildcardApiUrl = 'https://webhooks.mongodb-stitch.com/api/client/v2.0/app/ftssoccer-dinmy/service/get-player-wildcard/incoming_webhook/get-player-wildcard';


export const modifyAttributes = (playerName='', searchType='', attributes={}) => {
    let minimumOverall = '';
    let nationSelect = '';
    let nationExclude = '';

    if(attributes.nationExclude.length > 0){
        nationExclude = `&natex=${attributes.nationExclude}`;
    }

    if(attributes.nation.length > 0){
        nationSelect = `&natin=${attributes.nation}`;
    }

    if(attributes.minOverall > 1){
        minimumOverall = `&over=${attributes.minOverall}`;
    }
    
    return(dispatch) => {
        if(searchType=='Autocomplete'){
            return axios
            .get(`${autocompleteApiUrl}?arg=${playerName}${minimumOverall}${nationSelect}${nationExclude}`)
            .then((req) => {
                const playerPayload = [];
                req.data.forEach((player) =>{
                    playerPayload.push(player)
                })
                dispatch(setModifiedAttributes({...attributes, playerName, searchType, playerPayload}))
            })
            .catch((res) => {return Promise.reject(res);});
        }
        else if(searchType =='Fuzzy'){
            return axios
            .get(`${fuzzyApiUrl}?arg=${playerName}${minimumOverall}${nationSelect}${nationExclude}`)
            .then((req) => {
                const playerPayload = [];
                req.data.forEach((player) =>{
                    playerPayload.push(player)
                })
                dispatch(setModifiedAttributes({...attributes, playerName, searchType, playerPayload}))
            })
            .catch((res) => {return Promise.reject(res);});
        }
        else{
            return axios
            .get(`${wildcardApiUrl}?arg=${playerName}${minimumOverall}${nationSelect}${nationExclude}`)
            .then((req) => {
                const playerPayload = [];
                req.data.data.forEach((player) =>{
                    playerPayload.push(player)
                })
                dispatch(setModifiedAttributes({...attributes, playerName, searchType, playerPayload}))
            })
            .catch((res) => {return Promise.reject(res);});
        }
    }
};

export const setModifiedAttributes = (modAttributes) => {
    return {
        ...modAttributes,
        type:'SEARCH'
    };
}

export const resetAttributes = () => {
    return {
        type:'RESET'
    };
};
