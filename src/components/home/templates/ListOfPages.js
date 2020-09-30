import React from 'react';

const PaginationPannel = ({numberOfPages, navigateToPage}) => {

    const getListOfPages = () => {
        const list = Array.from({length: numberOfPages}, (v,i)=>i);
        return list?.map((number)=> {
            return (
                <button
                    key={number}
                    style={{margin: 5}}
                    onClick={() => navigateToPage(number + 1)}
                >
                    {number + 1}
                </button>
            );
        });
    }


    return (
        <>
            {getListOfPages()}
        </>
    );

};

export default PaginationPannel;