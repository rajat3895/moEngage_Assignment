import Api from '../../apis/Api';

export const getCampaignList = () => {
    return (dispatch) => {
        const res = Api.getCampaignList();
        console.log(res);
        dispatch({type: 'GET_CAMPAIGN_LIST', payload: res});
    }
};

export default {
    getCampaignList
}