import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';
import {
    gql,
    useMutation
} from '@apollo/client';
import { GlobalLayoutContext } from '@/layouts/parts/GlobalLayoutContext';
import { logoutUser } from "@/store/reducers/user/userReducer.js"


const LOGOUT_ACTION = gql`
    mutation LogoutAction($input: LogoutInput!) {
        logout(input: $input) {
            result
        }
    }
`;

const LogoutButton = () => {

    const userID = useSelector((state) => state.user.about.id)

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const layoutContext = useContext(GlobalLayoutContext);

    const [logout] = useMutation(LOGOUT_ACTION, {
        onError: ({ operation, response, graphQLErrors, networkError }) => {
            layoutContext.showNotify({
                text: 'graphql error' + graphQLErrors.join(' ')
            })
        }
    });

    const letsLogout = () => {
        try {
            logout({
                variables: {
                    input: {
                        id: userID
                    }
                }
            }).then(res=> {
                dispatch(logoutUser());
                localStorage.removeItem('refreshToken');
                Cookies.set('token', '');
                navigate('/');
            })
        } catch (err) {
            console.log(err)
            layoutContext.showNotify({
                text: 'graphql error' + JSON.stringify(err)
            })
        }
    }

    return (
        <button
            onClick={letsLogout}
        >
            Log out
        </button>
    )
}

export default LogoutButton;