import {connect} from 'react-redux';
import {getCampaignList} from '../../redux/actions'
import HomeComponent from './Home.component';

const mapStateToProps = (state) => {
    return {
        campaignList: state.campaignList
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getCampaignListData: () => {
            dispatch(getCampaignList());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);