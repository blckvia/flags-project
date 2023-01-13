export const SET_SEARCH = '@@conntrols/SET_SEARCH';
export const SET_REGION = '@@controls/SET_REGION';

export const setSearch = (search) => ({
    type: SET_SEARCH,
    payload: search,
});

export const setRegion = (region) => ({
    type: SET_REGION,
    payload: region,
});

// export const search =
//     () =>
//     (dispatch, _, { client, api }) => {
//         client.get(api.searchByCountry());
//     };
