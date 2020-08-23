import React from 'react';
import {
    InputFieldContainer, 
    TextInputWithPlaceholder,
    CheckmarkInputWithLabel,
    TextDropDown,

} from '../../utils/utils';
import {
   SIZE
} from '../../utils/constants';

const sortOptions = [

    'Most relevant',
    'Earliest start date',
    'Highest rated',
    'Lowest cost',
]
export const ResultInfobar = (props) => {
    const {
        term
    } = props;
    return (
        <div className="resultinfobar">
            <div className="resultinfobar-term">
                You searched  "{term}"
            </div>
            <div className="resultinfobar-sort">
                <InputFieldContainer size={SIZE.LARGE}>
                    <TextDropDown
                        placeholder="Sort results..."
                        options={sortOptions}
                    />
                </InputFieldContainer>
               
            </div>
        </div>
    )
}
export default ResultInfobar;