import React from 'react';
import { useSelector } from 'react-redux';
import './userShortInfo.sass';

const UserShortInfo = () => {

    const userName = useSelector((state) => state.user.about.name)
    
    if (userName) {
        return (
            <div className='user-short-info'>
                {userName}
            </div>
        )
    }

    return null;
}

export default UserShortInfo;