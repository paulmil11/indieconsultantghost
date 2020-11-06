module.exports = {
    // Do not include a trailing slash!
    siteUrl: `https://indieconsultant.co`,

    // Maximum number of post shown per page
    // With Infinite Scroll this is the chunk of posts fetched when scrolling down
    postsPerPage: 3,

    // This allows an alternative site title for meta data for pages.
    siteTitleMeta: `Learn Freelance Consulting`,

    // This allows an site description for meta data for pages.
    siteDescriptionMeta: `Learn how to take the leap and become a freelance consultant`,

    // Change to the width and height of your default share image
    shareImageWidth: 1000,
    shareImageHeight: 523,

    // Used for App and Offline manifest e.g. Mobile Home Screen
    shortTitle: `Jamify`,
    siteIcon: `favicon.png`,
    backgroundColor: `#e9e9e9`,
    themeColor: `#15171A`,
    
      siteTwitterHandle: `@p_millerd`, 
    
    
     plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "G-HWRT0QK9MF",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        // Defers execution of google analytics script after page load
        defer: false,
        // Any additional optional fields
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "example.com",
      },
    },
  ],

}
