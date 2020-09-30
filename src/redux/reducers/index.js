const initialState = {};

export default (state = initialState, action) => {
  const {type, payload} = action;
    switch (type) {
     case 'GET_CAMPAIGN_LIST':
        return {
          ...state,
          campaignList: payload
        };
     default:
      return state
    }
   }