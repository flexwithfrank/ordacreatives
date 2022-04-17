import React from 'react';
import Badge from 'react-bootstrap/Badge'

export default function Pills({ txt, bg, clr }) {
    return(
        <div className='josefin'>
            <Badge pill bg={bg} text={clr}>
            {txt}
            </Badge>
        </div>
    );
}