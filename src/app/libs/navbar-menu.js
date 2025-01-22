export const navbarMenu = [
  {
    name: 'Services',
    showArrow: true,
    subMenu: true,
    submenuList: [
      { name: 'Ceramic Coating', link: '/services/ceramic-coating' },
      { name: 'Paint Correction', link: '/services/paint-correction' },
      { name: 'Decontamination', link: '/services/decontamination' },
      { name: 'Interior Detailing', link: '/services/interior-detailing' },
      { name: 'Headlight Restoration', link: '/services/headlight-restoration' },
      { name: 'Engine Bay Detail', link: '/services/engine-bay-detail' },
    ]
  },
  {
    name: 'Subscription Plans',
    showArrow: false,
    subMenu: false,
    submenuList: []
  },
  {
    name: 'About Us',
    showArrow: true,
    subMenu: true,
    submenuList: [
      { name: 'Our Location', link: '/our-location' },
      { name: 'Gallery', link: '/gallery' },
      { name: 'FAQ', link: '/faq' },
      { name: 'Privacy Policy & TOS', link: '/privacy-policy-tos' },
    ]
  }
]