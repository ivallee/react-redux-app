import React from 'react';

import App from './client/components/App.react';
import Messages from './client/components/Messages.react';


export default [
  {
    path: '/',
    Component: App,
    children: [
      {
        Component: () => <div>Main</div>,
      },
      {
        path: 'messages',
        Component: Messages,
      },
    ],
  },
];
