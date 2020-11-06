let siteConfig
let ghostConfig
let routesConfig

try {
    siteConfig = require(`./siteConfig`)
} catch (e) {
    siteConfig = null
}

try {
    routesConfig = require(`./routesConfig`)
} catch (e) {
    routesConfig = null
}

try {
    ghostConfig = require(`./.ghost`)
} catch (e) {
    ghostConfig = {
        development: {
            apiUrl: process.env.GHOST_API_URL,
            contentApiKey: process.env.GHOST_CONTENT_API_KEY,
        },
        production: {
            apiUrl: process.env.GHOST_API_URL,
            contentApiKey: process.env.GHOST_CONTENT_API_KEY,
        },
    }
} finally {
    const { apiUrl, contentApiKey } = process.env.NODE_ENV === `development` ? ghostConfig.development : ghostConfig.production

    if (!apiUrl || !contentApiKey || contentApiKey.match(/<key>/)) {
        ghostConfig = null //allow default config to take over
    }
}





module.exports = {
    plugins: [
        {
            resolve: `gatsby-theme-try-ghost`,
            options: {
                ghostConfig: ghostConfig,
                siteConfig: siteConfig,
                routes: routesConfig,
            },
                               
        },
        
        
        {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "G-HWRT0QK9MF",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: ㄍㄧ,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        // Defers execution of google analytics script after page load
        defer: false,
        // Any additional optional fields
        sampleRate: 5,
        siteSpeedSampleRate: 10,
      },
    },
        
        
        {
            resolve: `gatsby-theme-ghost-dark-mode`,
            options: {
                // Set to true if you want your theme to default to dark mode (default: false)
                // Note that this setting has an effect only, if
                //    1. The user has not changed the dark mode
                //    2. Dark mode is not reported from OS
                defaultModeDark: false,
                // If you want the defaultModeDark setting to take precedence
                // over the mode reported from OS, set this to true (default: false)
                overrideOS: false,
            },
        },
        {
            resolve: `gatsby-transformer-rehype`,
            options: {
                filter: node => (
                    node.internal.type === `GhostPost` ||
                    node.internal.type === `GhostPage`
                ) && node.slug !== `data-schema`,
                plugins: [
                    {
                        resolve: `gatsby-rehype-ghost-links`,
                    },
                    {
                        resolve: `gatsby-rehype-prismjs`,
                    },
                ],
            },
        },
    ],
}
