module.exports = {
    base: '/bagisto-docs/',
    title: 'Documentation',
    description: 'Just playing around',
    themeConfig: {
        smoothScroll: true,
        lastUpdated: 'Last Updated',
        repo: 'bagisto/bagisto',
        repoLabel: 'Contribute to Bagisto',
        docsRepo: 'bagisto/bagisto-docs',
        docsDir: 'docs',
        docsBranch: 'master',
        editLinks: true,
        editLinkText: 'Help us improve this page on Github.',

        logo: 'https://devdocs.bagisto.com/assets/images/logo.png',
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Extensions', link: 'https://bagisto.com/en/extensions/' },
            { text: 'Community Forum', link: 'https://forums.bagisto.com/' }
        ],
        sidebar: [
            "/",
            {
                title: "Introduction",
                path: "/introduction/",
                collapsable: true,
                children: [
                    ["introduction/requirements", "Requirements"],
                    ["introduction/installation", "Installation"],
                    ["introduction/folders", "Directory structure"],
                ]
            },
            {
                title: "API",
                path: "/api/",
                collapsable: true
            },            
            {
                title: "Advanced topics",
                path: "/advanced/",
                collapsable: true,
                children: [
                    ["advanced/create_shipping_method", "Create a shipping method"],
                    ["advanced/create_payment_method", "Create a payment method"],
                    ["advanced/datagrid", "Data grid"],
                    ["advanced/events", "Events"],
                    ["advanced/override-core-model", "Override core models"],
                    ["advanced/security_practice", "Best Security Practices"],
                    ["advanced/render_event", "View render event"],
                ]
            },
            {
                title: "Package Development ",
                path: "/packages/create",
                collapsable: true,
            },            
            {
                title: "Themes",
                path: "/themes",
                collapsable: true,
                children: [
                    ["themes/create_theme", "Create a store theme"],
                    ["themes/create_admin_theme", "Create a admin theme"],
                ]
            },
            {
                title: "Translations",
                path: "/translations/",
                collapsable: true,
            },
        ]
    },
    plugins: ['@vuepress/pwa', 'copy-code', '@vuepress/back-to-top']
};