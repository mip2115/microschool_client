import React from 'react';
import {
    InputFieldContainer, 
    TextInputWithPlaceholder,
    CheckmarkInputWithLabel,
    TextDropDown,

} from '../../utils/utils';
import { SIZE } from '../../utils/constants';

const gradeLevels = ['Kindergarden', 'First grade', 'Second grade', 
    'Third grade', 'Fourth grade', 'Fifth grade', 'Sixth grade', 'Seventh grade', 
    'Eigth grade', 'Ninth grade', 'Tenth grade', 'Eleventh grade', 'Twelfth grade'];

const priceBrackets = ['$0 - $1000', '$1000 - $2000', '$2000 - $3000',
'$3000 - $4000', '$4000 - $5000', '$5000 - $6000', '$6000 - $7000',
'$7000 - $8000', '$8000 - $9000', '$8000 - $10,000', '$10,000 - $12,000'
]

const months = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December'
]
const ResultsFilterCol = () => {
    return (
        <div className="results-filter-col">
            <InputFieldContainer size={SIZE.LARGE}>
                <TextInputWithPlaceholder
                    placeholder="Find a course..."
                    
                />
            </InputFieldContainer>
            <br />

            <InputFieldContainer size={SIZE.LARGE}>
                <TextInputWithPlaceholder
                    placeholder="Zipcode, city, or state..."
                    
                />
            </InputFieldContainer>
            <br />
            <InputFieldContainer size={SIZE.LARGE}>
                <CheckmarkInputWithLabel
                    label="Masks required"
                />
            </InputFieldContainer>
            <br />
            <InputFieldContainer size={SIZE.LARGE}>
                <CheckmarkInputWithLabel
                    label="Zoom in option"
                />
            </InputFieldContainer>
            

            <br />
            <InputFieldContainer size={SIZE.LARGE}>
                <TextDropDown
                    placeholder="Start date"
                    options={months}
                />
            </InputFieldContainer>

            <br />

            <InputFieldContainer size={SIZE.LARGE}>
                <TextDropDown
                    placeholder="End date"
                    options={months}
                />
            </InputFieldContainer>

            <br />
           
            <InputFieldContainer size={SIZE.LARGE}>
                <TextDropDown
                    placeholder="Select grade level"
                    options={gradeLevels}
                />
            </InputFieldContainer>

            <br />
            <InputFieldContainer size={SIZE.LARGE}>
                <TextDropDown
                    placeholder="Select price"
                    options={priceBrackets}
                />
            </InputFieldContainer>

        </div>
    )
}

export default ResultsFilterCol;