/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config.html for all the possible
// site configuration options.

/* List of projects/orgs using your project for the users page */
const users = [{
  caption: 'Amit Sharma',
  image: '',
  infoLink: '',
  pinned: true,
}];

const siteConfig = {
  customDocsPath: 'german-docs/docs',
  title: 'Technical Documentation' /* title for your website */ ,
  tagline: 'Website for all technical documentation...',
  url: '',
  cleanUrl: false,

  baseUrl: '/' /* base url for your project */ ,

  // Used for publishing and more
  projectName: 'project-documents',
  organizationName: 'Sharma',

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [{
      doc: 'german-tutorial/prepositions/prepositions',
      label: 'prepositions'
    },
    {
      page: 'help',
      label: 'Help'
    },
    // { blog: true, label: 'Blog' },
  ],

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  headerIcon: 'img/project-logo.png',
  footerIcon: 'img/project-logo.png',
  favicon: 'img/project-logo.png',

  blogSidebarCount: 'ALL',

  /* colors for website */
  colors: {
    primaryColor: '#20232a',
    secondaryColor: '#e91e39',
    // primaryColor: '#2E8555',
    // secondaryColor: '#205C3B',
  },

  /* custom fonts for website */
  fonts: {
    myFont: [
      "-apple-system",
      "BlinkMacSystemFont",
      "Segoe UI",
      "Roboto",
      "Oxygen",
      "Ubuntu",
      "Cantarell",
      "Fira Sans",
      "Droid Sans",
      "Helvetica Neue",
      "sans-serif",
    ]
  },

  // This copyright info is used in /core/Footer.js and blog rss/atom feeds.
  copyright: 'Copyright © ' +
    new Date().getFullYear() +
    ' Sharma',

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags
  scripts: [
    // 'https://buttons.github.io/buttons.js'
  ],

  /* On page navigation for the current documentation page */
  onPageNav: 'separate',

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  //   repoUrl: 'https://github.com/facebook/test-site',
};

module.exports = siteConfig;
