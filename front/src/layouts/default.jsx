import React from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import './default.sass';

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
        <div>
          <h1>
            {title}
          </h1>
        </div>
        <div>
          {children}
        </div>
      </HelmetProvider>
    </>
  )
}

export default Layout
