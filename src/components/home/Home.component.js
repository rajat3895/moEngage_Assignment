import React, {PureComponent} from 'react';
import './Home.css';
import PaginationPannel from './templates/PaginationPannel';
import Utils from '../../Utils';

let typingTimer;
class HomeComponent extends PureComponent {
    constructor() {
        super();
        this.ref = React.createRef();
        this.state = {
            page: 1,
            searchText: ''
        };
    }

    componentDidMount() {
        this.props.getCampaignListData();
    }

    updateState = (newState) => {
        this.setState({...newState});
    }

    getPageDetails = () => {
        const {page='', searchText} = this.state
        const pageDetails = this.props.campaignList?.slice((page-1)*10, page*10);
        return pageDetails?.map((campaign) => {
            if (searchText === '' || searchText && campaign.name.includes(searchText.toUpperCase())) {
                return (
                    <div key={campaign.id} className='parentFlex'>
                        <div className='col1'>
                            {campaign?.name}
                        </div>
                        <div className='col2'>
                            {campaign?.type}
                        </div>
                        <div className='col2'>
                            {campaign?.company}
                        </div>
                    </div>
                );
            } return null;
        });
    }

    navigateToPage = (newState) => {
        this.updateState({page: newState});
    }

    startTimer = () => {
        setTimeout(this.doneTyping, 1500);
    }

    stopTimer = () => {
        clearTimeout(typingTimer);
    }

    doneTyping = () => {
        this.updateState({searchText: this.ref.current.value});
    }
    
    render() {
        const {campaignList = []} = this.props;
        return (
            <>
                <div style= {{display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderRadius: 16}}>
                    <input

                        ref={this.ref}
                        style={{flex:0.85, padding: 10}}
                        onKeyUp={()=>this.startTimer()}
                        onKeyDown={()=>this.stopTimer()}
                        placeholder={'Type your search text here'}
                        >
                    </input>
                    <button
                        style={{flex:0.1, padding:10}}
                        onClick={()=>this.getSearchData()}>
                         Search
                    </button>
                </div>
                <div className='parent'>
                        <div className='col1'>
                            Campaign Name
                        </div>
                        <div className='col2'>
                            Type
                        </div>
                        <div className='col2'>
                            Company
                        </div>
                </div>
                {this.getPageDetails()}
                {campaignList.length  &&
                    <PaginationPannel
                    key={this.state.page}
                    numberOfPages={Utils.getPages(campaignList)}
                    navigateToPage={this.navigateToPage}
                    page={this.state.page} />
                }
            </>
        );
    }
}

export default HomeComponent;