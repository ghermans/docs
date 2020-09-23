module.exports = {
    base: '/',
    title: 'Documentation',
    description: 'Bagisto Developer Portal',
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

        logo: '../logo.png',
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
                    ["introduction/upgrade_to_latest_bagisto", "Upgrade Bagisto"],
                    ["introduction/folders", "Directory structure"]
                ]
            },
            {
                title: "Package Development",
                path: "/packages/create",
                collapsable: true,
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
                    ["advanced/render_event", "View render event"]
                ]
            },           
            {
                title: "Themes",
                path: "/themes",
                collapsable: true,
                children: [
                    ["themes/create_theme", "Create a store theme"],
                    ["themes/create_admin_theme", "Create a admin theme"]
                ]
            },
            {
                title: "Translations",
                path: "/translations/",
                collapsable: true,
            },
            {
                title: "User guides",
                path: "/user_guides/",
                collapsable: true,
                children: [
                    ["/user_guides/cart_rule", "Cart rules"],
                ]
            }, 
            {
                title: "Bagisto Web API",
                path: "/api/",
                collapsable: true,
                children: [
                    ["api/customer_addresses", "Addresses"],
                    ["api/categories", "Categories"],
                    ["api/customers", "Customers"],
                    ["api/customer_review", "Customer reviews"],
                    ["api/invoice_shipment", "Invoices & Shipments"],
                    ["api/order", "Orders"],
                    ["api/products", "Products"],
                    ["api/product_review", "Product reviews"],
                    ["api/cart", "Shopping cart"]
                ]
            },
        ]
    },
    markdown: {
        lineNumbers: false
    },
    plugins: ['@vuepress/pwa', 'copy-code', '@vuepress/back-to-top']
};
