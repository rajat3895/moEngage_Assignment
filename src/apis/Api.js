import mockData from './mockData.json';

class Api {

    getCampaignList = () => {
        return mockData;
    }
}

export default new Api();