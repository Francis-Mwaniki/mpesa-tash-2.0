export default defineAppConfig({
  docus: {
    title: '@Tash2.0',
    description: 'The mpesa wrapper.',
    image: '',
    socials: {
      twitter: 'mpesa@tash2.0',
      github: 'seanbarak'
    },
    github: {
      dir: '.main',
      branch: 'main',
      repo: 'mpesa@tash2.0',
      owner: 'Sean Baraka',
      edit: true
    },
    aside: {
      level: 0,
      collapsed: false,
      exclude: []
    },
    main: {
      padded: true,
      fluid: true
    },
    header: {
      logo: false,
      showLinkIcon: true,
      exclude: [],
      fluid: true
    },
    footer: {
      iconLinks: [
        {
          href: 'https://github.com/seanbaraka/mpesa-sdk',
          icon: 'simple-icons:github'
        }
      ]
    }
  }
})
