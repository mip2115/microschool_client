import React from 'react';
import {InputFieldContainer, TextInput} from '../../utils/utils';
import { SIZE } from '../../utils/constants';

const ResultsFilterCol = () => {
    return (
        <div className="results-filter-col">
            <InputFieldContainer size={SIZE.LARGE}>
                <TextInput
                    label="Course"
                />
            </InputFieldContainer>
        </div>
    )
}

export default ResultsFilterCol;