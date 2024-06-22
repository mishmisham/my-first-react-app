import React from 'react';
import { useSelector } from 'react-redux';
import { ClientOnly } from "react-client-only";
import './userShortInfo.sass';

const UserShortInfo = () => {

    const userName = useSelector((state) => state.user.about.name)
    
    if (userName) {
        return (
            <ClientOnly>
                <div className='user-short-info'>
                    {userName}
                </div>
            </ClientOnly>
        )
    }

    return null;
}

export default UserShortInfo;