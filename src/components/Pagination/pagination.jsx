/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const Pagination = (props) => {
    const pageLinks = [];

    for (let i=1; i <= props.pages; i++) {
        // eslint-disable-next-line
        let active = props.currentPage == i ? 'active' : '';

        pageLinks.push(<li className={`page ${active}`} key={i} onClick={() => props.nextPage(i)}><a href="#">{i}</a></li>)
        
    }

    var min = props.currentPage - 2;
    var max = props.currentPage + 3;

    if (props.currentPage <= 2) {
        min = 0;
        max = 5;
    }
    
    var adjustedPageLinks = pageLinks.slice(min, max);
    
    if (props.currentPage > 2) {
        adjustedPageLinks.unshift(<li className={`page`} key={Math.random()}><span href="#">...</span></li>);
        adjustedPageLinks.unshift(<li className={`page`} key={1} onClick={() => props.nextPage(1)}><a href="#">1</a></li>);
    }
    if (props.currentPage < props.pages - 3) {
        adjustedPageLinks.push(<li className={`page`} key={Math.random()}><span href="#">...</span></li>);
        adjustedPageLinks.push(<li className={`page`} key={props.pages} onClick={() => props.nextPage(props.pages)}><a href="#">{props.pages}</a></li>);
    }

    return (
        <div className="container pagination-container">
            <ul className="pagination">
                { adjustedPageLinks }
            </ul>
        </div>
    )
}

export default Pagination