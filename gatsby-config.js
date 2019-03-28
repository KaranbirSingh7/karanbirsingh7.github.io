module.exports = {
  siteMetadata: {
    title: 'Karanbir Singh',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/ironman-favicon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/layouts/index.js`),
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-responsive-iframe',
          'gatsby-remark-autolink-headers',
        ],
      },
    },
    'gatsby-plugin-catch-links',
    'gatsby-plugin-compression-v2',
    'gatsby-plugin-offline',
    'gatsby-plugin-sass',
  ],
}
