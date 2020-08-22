import React from 'react';
import ResultsFilter from './ResultsFilterCol';
import ResultsList from './ResultsList';
const Results = (props) => {
    return (
        <div className="results">
          
            <ResultsFilter />
           <ResultsList />
        </div>
    )
}

export default Results;