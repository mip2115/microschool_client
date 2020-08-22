import React from 'react';
import ResultItem from './ResultItem';

const ResultsList = (props) => {
    return (
        <div className="resultslist">
            <ResultItem 
                name="Ben Haberman"
                profileImage="https://media-exp1.licdn.com/dms/image/C5603AQGvCJcL7oYk_w/profile-displayphoto-shrink_400_400/0?e=1603324800&v=beta&t=sd-LkDtkMrzhPl7eXPQlFPlXAG4PMFP_bcy80bNXSLU"
            />
        </div>
    )
}

export default ResultsList;