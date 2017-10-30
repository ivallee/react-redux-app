import React from 'react';

import App from './client/components/App.react';
import MessageList from './client/components/MessageList.react';


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
        Component: MessageList,
      },
    ],
  },
];
