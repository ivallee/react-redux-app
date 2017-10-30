import React from 'react';

import App from './client/components/App.react';
import MessageList from './client/components/MessageList.react';
import MessageDetail from './client/components/MessageDetail.react';


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
        children: [
          {
            path: ':id',
            Component: MessageDetail,
          }
        ]
      },
    ],
  },
];
