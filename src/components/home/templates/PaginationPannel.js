import React, {Component} from 'react';
import ListOfPages from './ListOfPages';

class PaginationPannel extends Component {
    render() {
        const {page, numberOfPages, navigateToPage} = this.props;
        const prev ='<'
        const next ='>'
        return (
        <div style= {{display:'flex', margin: 'auto', width: 50}}>
            <button
                style={{fontWeight: 'bold', margin: 10}}
                onClick={()=>navigateToPage(page-1)}
            >{prev}
            </button>
            <ListOfPages
                numberOfPages={numberOfPages}
                navigateToPage={navigateToPage}
            />
            <button
                style={{fontWeight: 'bold', margin: 10}}
                onClick={()=>navigateToPage(page+1)}
            >{next}
            </button>
        </div>);
    }
}

export default PaginationPannel;