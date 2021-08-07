import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'SAP Assignment',
    url: '/view',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'Requests',
        url: '/view/requests',
        icon: 'icon-speedometer'
      },
      {
        name: 'Form',
        url: '/view/form',
        icon: 'icon-puzzle'
      },
      {
        name: 'About',
        url: '/view/about',
        icon: 'icon-info'
      }
    ]
  }
];
