'use strict';
import React, { useState } from 'react';
const Pagination = (props) => {
    const pages = [];
    for (let index = 0; index < props.pages; index++) {
        pages.push(<a href='teste' className="pagination__item"> {index+1} </a>);
    }
    return (
        <div className="pagination">
            {pages}
        </div>
    );
}

export default Pagination;