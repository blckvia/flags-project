export const SET_SEARCH = '@@conntrols/SET_SEARCH';

export const setSearch = (search) => ({
    type: SET_SEARCH,
    payload: search,
});

// export const search =
//     () =>
//     (dispatch, _, { client, api }) => {
//         client.get(api.searchByCountry());
//     };
