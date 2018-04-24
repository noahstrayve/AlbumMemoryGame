import React from 'react';
// fluid allows for full width row. 
export const Row = ({fluid, children}) => (
    <div className={`row${fluid ? "-fluid" : ""}`}>
        {children}
    </div>
)