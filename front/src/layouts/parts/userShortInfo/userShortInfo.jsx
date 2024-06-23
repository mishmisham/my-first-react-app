import React from 'react';
import { useSelector } from 'react-redux';
import { ClientOnly } from "react-client-only";
import LogoutButton from '@/components/combined/logout/logoutButton';
import './userShortInfo.sass';

const UserShortInfo = () => {

    const userName = useSelector((state) => state.user.about.name)

    if (userName) {
        return (
            <ClientOnly>

                <div className='user-short-info'>
                    {userName}
                </div>

                <LogoutButton />

            </ClientOnly>
        )
    }

    return null;
}

export default UserShortInfo;