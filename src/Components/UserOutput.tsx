import React from 'react'

interface Props {
    userName: string;
}

function UserOutput({ userName }: Props) {
    return (
        <div className="output-container">
            <p>{userName}</p>
        </div>
    )
}

export default UserOutput
