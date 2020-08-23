import React from 'react';
import ResultsFilter from './ResultsFilterCol';
import ResultsList from './ResultsList';
import ResultInfobar from './ResultInfobar';
const Results = (props) => {
    return (
        <div className="results">
          
          <ResultInfobar 
            term="algebra"
          />
          
          <div className="results-display">
            <ResultsFilter />
            <ResultsList />
           </div>
        </div>
    )
}

export default Results;