import React from 'react'

import { StyledTypeSelector } from './TypeSelector.style'

export const FOR_COMPONENT = {
    LANDING: 1, //Default
    HEADER: 2
}

const RADIO_OPTIONS = [
    { id: "any", value: "any", label: "Any" },
    { id: "movie", value: "movie", label: "Movies" },
    { id: "series", value: "series", label: "Series" },
    { id: "episodes", value: "episode", label: "Episodes" },
];


const RadioInput = ({ id, name, onChange, value, checked, label }) => {
    return (
        <div>
            <input type="radio" id={id} onChange={onChange} name={name} value={value} checked={checked} />
            <label htmlFor={id}>{label}</label>
        </div>
    )
}

export default function TypeSelector({ forComponent = FOR_COMPONENT.LANDING, onChange, searchType, groupName = "search-type", showLabel = true }) {
    return (
        <StyledTypeSelector $for={forComponent}>
            {/* If showLabel then render the label component. True by default */}
            {showLabel && (
                <div className='title-type-label'>
                    TYPE
                </div>
            )}
            <div className='title-type-options'>
                {
                    RADIO_OPTIONS.map((radioType) => {
                        return (
                            <RadioInput
                                key={radioType.id}
                                id={radioType.id}
                                name={groupName}
                                onChange={onChange}
                                value={radioType.value}
                                checked={searchType === radioType.id}
                                label={radioType.label}
                            />
                        )
                    })
                }
            </div>
        </StyledTypeSelector>
    )
}
