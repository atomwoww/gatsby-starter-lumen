'use strict';

module.exports = {
  url: 'https://blog.atomthink.com',
  pathPrefix: '/',
  title: 'Blog by Atom',
  subtitle: 'Atom의 Tech Blog',
  copyright: '© All rights reserved.',
  disqusShortname: 'atomwow',
  postsPerPage: 4,
  googleAnalyticsId: 'UA-146505718-1',
  useKatex: false,
  menu: [
    {
      label: 'Articles',
      path: '/'
    },
    {
      label: 'About me',
      path: '/pages/about'
    },
  ],
  author: {
    name: 'Junseok Oh',
    photo: '/photo.jpg',
    bio: 'Samsung Electronics',
    contacts: {
      email: 'ojs0106@gmail.com',
      github: 'atomwoww',
      linkedin: 'oh-junseok-a779b3120',
    }
  }
};
