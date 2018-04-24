import React from 'react';

export const Board = ({fluid, children}) => (

    <div className={`container${fluid ? "-fluid" : ""}`}>
        {children}
    </div>
)