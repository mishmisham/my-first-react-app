import React from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import './default.sass';
import NavMenu from './parts/NavMenu/navMenu';
import DefaultFooter from './parts/defaultFooter/defaultFooter';

import websocketClient, { websocketSendEcho, websocketSendPing } from '../../websocket/client';

const Layout = ({ children, title, description }) => {

  websocketClient.addEventListener("open", (ev) => {
    websocketSendEcho('lorem!');
  });

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={description} />
        </Helmet>

        <header>
          <NavMenu />
        </header>

        <div className="content">
          <div className="content_page">
            {children}
          </div>
        </div>

        <DefaultFooter />
        
      </HelmetProvider>
    </>
  )
}

export default Layout
