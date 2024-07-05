import React, { useMemo, useState, useEffect } from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import './default.sass';
import NavMenu from './parts/NavMenu/navMenu';
import UserShortInfo from './parts/userShortInfo/userShortInfo';
import NotifyComponent from '@/components/primitives/notifyComponent/notifyComponent';
import DefaultFooter from './parts/defaultFooter/defaultFooter';
import {GlobalLayoutContext} from './parts/GlobalLayoutContext';
// import websocketClient, { websocketSend } from '@/websocket/client';

const Layout = ({ children, title, description }) => {

  // useEffect(() => {
  //   if (typeof window !== undefined) {
  //     websocketSend('lorem!');
  //   }
  // })
    

  const [displayNotify, setDisplayNotify] = useState({
    show: false,
    text: '',
    type: 'error',
    timeout: 5000
  })

  const showNotify = (params) => {
    setDisplayNotify({
      ...displayNotify,
      ...params,
      show: true
    })
  }

  const onHideNotify = () => {
    setDisplayNotify({
      ...displayNotify,
      show: false,
      text: '',
    })
  }

  const contextData = useMemo(() => ({
    showNotify,
  }), []);

  return (
    <HelmetProvider>
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={description} />
        </Helmet>

        <header className="header">
          <div className="header-inner">

            <NavMenu />

            <UserShortInfo />

          </div>
        </header>

        <div className="content">
          <div className="content_page">
            <GlobalLayoutContext.Provider value={contextData}>
              {children}
            </GlobalLayoutContext.Provider>
          </div>
        </div>

        <DefaultFooter />

        <NotifyComponent
          show={displayNotify.show}
          text={displayNotify.text}
          type={displayNotify.type}
          timeout={displayNotify.timeout}
          onHide={onHideNotify}
        />
        
      </HelmetProvider>
  )
}

export default Layout
