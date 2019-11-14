'use strict';
import React, { useState } from 'react';
const Pagination = (props) => {
    const pages = [];
    for (let index = 0; index < props.pages; index++) {
        pages.push(<a onClick={props.pageClick} className="pagination__item"> {index+1} </a>);
        // pages.push(<a href={`/character?page=${index+1}&${props.queryString}`} className="pagination__item"> {index+1} </a>);
    }
    return (
        <div className="pagination">
            {pages}
        </div>
    );
}

export default Pagination;