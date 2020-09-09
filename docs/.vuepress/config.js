module.exports = {
    base: '/bagisto-docs/',
    title: 'Documentation',
    description: 'Just playing around',
    themeConfig: {
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
                ]
            },
            {
                title: "Package Development ",
                path: "/packages/",
                collapsable: true,
                children: [
                    ["packages/create", "Create a new package"],
                    ["packages/backend_menu", "Add a menu to the Backend"],
                ]
            },
            {
                title: "Themes",
                path: "/themes/",
                collapsable: true,
                children: [
                    ["themes/backend",  "Create a admin theme"],
                    ["themes/frontend", "Create a store theme"],
                ]
            },
        ]
    },
    plugins: ['@vuepress/pwa', 'copy-code', '@vuepress/back-to-top']
};