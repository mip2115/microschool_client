import React from 'react';
import ResultItem from './ResultItem';

const link1 = "https://media-exp1.licdn.com/dms/image/C5603AQGvCJcL7oYk_w/profile-displayphoto-shrink_400_400/0?e=1603324800&v=beta&t=sd-LkDtkMrzhPl7eXPQlFPlXAG4PMFP_bcy80bNXSLU";
const link2 = "https://media-exp1.licdn.com/dms/image/C4E03AQFw6IafHg0i7w/profile-displayphoto-shrink_400_400/0?e=1603929600&v=beta&t=RZFGd6IqsMEqFS0wmlw1vnZbOXMFzKwEbeKXIDa0XTY";
const link3 = "https://media-exp1.licdn.com/dms/image/C4E03AQH9dZvHQ6avuQ/profile-displayphoto-shrink_400_400/0?e=1603929600&v=beta&t=oKAZoBSWOV3mQOc6DBENlTt0njd3FV-o3_in8HjY6aI";
const link4 = "https://media-exp1.licdn.com/dms/image/C5603AQGsSzHWUQS2tw/profile-displayphoto-shrink_400_400/0?e=1603929600&v=beta&t=5894an2nCyD_APIguwnipat6nYGcsQWyHk9AVGjD7bg";
const link5 = "https://media-exp1.licdn.com/dms/image/C4E03AQEG9lvKPIrr6g/profile-displayphoto-shrink_400_400/0?e=1603929600&v=beta&t=N9X6WfJnPqKW3fJAjfjlhesY84b4m8GKHFJbWWolkmQ";
const link6 = "https://media-exp1.licdn.com/dms/image/C5603AQEoSx9Ch0mVrw/profile-displayphoto-shrink_400_400/0?e=1603929600&v=beta&t=ABrs8FI9FdO-4AsVmMswygcNrcD86YIpSBR2CG3mud8";
const link7 = "https://media-exp1.licdn.com/dms/image/C4E03AQEJHCmgnmXmjQ/profile-displayphoto-shrink_400_400/0?e=1603929600&v=beta&t=bCNvTYMppSQIc_9MYK6DaWvWrMRncQrMRJhUhj0R0AA";
const ResultsList = (props) => {
    return (
        <div className="resultslist">
            <ul>
                <li>
                    <ResultItem 
                        name="Ben Haberman"
                        price={800}
                        rating={4.5}
                        subject="Introduction to algebra"
                        profileImage={link1}
                    />
                </li>
                <li>
                    <ResultItem 
                        name="Jacob Pickles"
                        price={1400}
                        rating={4.8}
                        subject="Algebraic strategies"
                        profileImage={link2}
                    />
                </li>
                <li>
                    <ResultItem 
                        name="Sarah Smith"
                        price={999}
                        rating={4.1}
                        subject="Linear algebra"
                        profileImage={link3}
                    />
                </li>
                <li>
                    <ResultItem 
                        name="Homer Simpson"
                        price={899}
                        rating={3.9}
                        subject="Algebra & the world"
                        profileImage={link4}
                    />
                </li>
                <li>
                    <ResultItem 
                        name="Martin Prince"
                        price={2100}
                        rating={4.2}
                        subject="Practical algebra"
                        profileImage={link5}
                    />
                </li>
                <li>
                    <ResultItem 
                        name="Sam Gelner"
                        price={1200}
                        rating={4.1}
                        subject="Fifth grade algebra"
                        profileImage={link6}
                    />
                </li>
                <li>
                    <ResultItem 
                        name="Ron Joshua"
                        price={950}
                        rating={3.8}
                        subject="Introduction to algebra"
                        profileImage={link7}
                    />
                </li>
            </ul>
        </div>
    )
}

export default ResultsList;