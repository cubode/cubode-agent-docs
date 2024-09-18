import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/cubode-agent-docs/markdown-page/',
    component: ComponentCreator('/cubode-agent-docs/markdown-page/', 'eff'),
    exact: true
  },
  {
    path: '/cubode-agent-docs/',
    component: ComponentCreator('/cubode-agent-docs/', 'dac'),
    routes: [
      {
        path: '/cubode-agent-docs/',
        component: ComponentCreator('/cubode-agent-docs/', '668'),
        routes: [
          {
            path: '/cubode-agent-docs/',
            component: ComponentCreator('/cubode-agent-docs/', '047'),
            routes: [
              {
                path: '/cubode-agent-docs/Change Log/',
                component: ComponentCreator('/cubode-agent-docs/Change Log/', '1f8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/cubode-agent-docs/Graphs/Bar Plot/',
                component: ComponentCreator('/cubode-agent-docs/Graphs/Bar Plot/', 'a22'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/cubode-agent-docs/Graphs/Heat Map/',
                component: ComponentCreator('/cubode-agent-docs/Graphs/Heat Map/', 'e16'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/cubode-agent-docs/Graphs/Line Plot/',
                component: ComponentCreator('/cubode-agent-docs/Graphs/Line Plot/', '714'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/cubode-agent-docs/Graphs/Pie Plot/',
                component: ComponentCreator('/cubode-agent-docs/Graphs/Pie Plot/', '0a2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/cubode-agent-docs/Graphs/Scatter Plot/',
                component: ComponentCreator('/cubode-agent-docs/Graphs/Scatter Plot/', 'baa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/cubode-agent-docs/',
                component: ComponentCreator('/cubode-agent-docs/', '4f9'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
