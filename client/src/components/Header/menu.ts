export const menu = [
  {
    name: 'PLAY',
    link: '/draw',
    submenu: [
      {name: 'PACK', link: '/draw'},
      {name: 'UPGRADE', link: '/upgrade'},
      // {name: '승부', link: '/prediction'},
    ],
  },
  {
    name: 'EARN',
    link: '/gallery',
    submenu: [
      {name: 'STAKING', link: '/gallery'},
      {name: 'SWAP', link: '/swap'},
    ],
  },
  {name: 'MARKET', link: '/market'},
  {name: 'WIN', link: '/win'},
  {name: 'COMMUNITY', link: '/community'},
  {
    name: 'OTHERS',
    link: '/event',
    submenu: [
      {name: 'EVENT', link: '/event'},
      {name: 'DONATION', link: '/donation'},
    ],
  },
];
