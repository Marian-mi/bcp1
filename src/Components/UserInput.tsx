import React from 'react'

type Props = {
    changeUserName(name: string): void;
}

function UserInput({ changeUserName }: Props) {
    return (
        <div className="input-container">
            <input
                type="text"
                onChange={(e) => {
                    changeUserName(e.target.value);
                }}
            />
        </div>
    )
}

export default UserInput
