(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{551:function(t,s,a){"use strict";a.r(s);var e=a(27),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"create-a-payment-method"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-a-payment-method"}},[t._v("#")]),t._v(" Create a payment method")]),t._v(" "),a("p",[t._v("We hope that now you know how to create a package, if not refer to "),a("RouterLink",{attrs:{to:"/packages/createe.html"}},[t._v("Package development")]),t._v(".")],1),t._v(" "),a("p",[t._v("Bagisto eases the task of creating payment methods so a novice developer or professional developer can easily create payment methods."),a("br"),t._v("\nAs the diversity of payment methods provide the options to customer for payment when they proceed to checkout."),a("br"),t._v("\nOn another perspective, multiple payment methods are a great strategy to reach out to the global marketplace.")]),t._v(" "),a("p",[t._v("In this article, we will explain how to create a payment method."),a("br"),t._v("\nYou can create a payment method in two ways.")]),t._v(" "),a("ol",[a("li",[t._v("By using Bagisto Package Generator ("),a("strong",[t._v("Recommended")]),t._v(")")]),t._v(" "),a("li",[t._v("By manually setting up all files ("),a("strong",[t._v("Expert Level")]),t._v(")")])]),t._v(" "),a("h2",{attrs:{id:"_1-by-using-bagisto-package-generator"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-by-using-bagisto-package-generator"}},[t._v("#")]),t._v(" 1. By using Bagisto Package Generator")]),t._v(" "),a("p",[t._v("For creating payment method package, you need to use this command in bagisto root directory,")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[t._v("php artisan package"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("make"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("payment"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("method ModuleName\n")])])]),a("p",[t._v("If somehow package directory already present then you can use force command as well. For that you just need to pass the '"),a("strong",[t._v("--force")]),t._v("' command.")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[t._v("php artisan package"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("make"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("payment"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("method ModuleName "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("force\n")])])]),a("p",[t._v("This will generate whole directory structures. You don't need to do manually.")]),t._v(" "),a("h2",{attrs:{id:"_2-by-manually-setting-up-all-files"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-by-manually-setting-up-all-files"}},[t._v("#")]),t._v(" 2. By manually setting up all files")]),t._v(" "),a("h4",{attrs:{id:"steps-to-create-a-payment-method"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#steps-to-create-a-payment-method"}},[t._v("#")]),t._v(" Steps to create a payment method")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("Create respective directory structure to create your payment method.")]),t._v(" "),a("ul",[a("li",[t._v("module-name/\n"),a("ul",[a("li",[t._v("src/\n"),a("ul",[a("li",[t._v("Config/\n"),a("ul",[a("li",[t._v("system.php")]),t._v(" "),a("li",[t._v("paymentmethods.php")])])]),t._v(" "),a("li",[t._v("Database/")]),t._v(" "),a("li",[t._v("Http/\n"),a("ul",[a("li",[t._v("Controllers/")]),t._v(" "),a("li",[t._v("Routes/")])])]),t._v(" "),a("li",[t._v("Listeners/")]),t._v(" "),a("li",[t._v("Payment/")]),t._v(" "),a("li",[t._v("Models/")]),t._v(" "),a("li",[t._v("Providers/\n"),a("ul",[a("li",[t._v("ModuleServiceProvider.php")]),t._v(" "),a("li",[t._v("EventServiceProvider.php")])])]),t._v(" "),a("li",[t._v("Repositories/")]),t._v(" "),a("li",[t._v("Resources/\n"),a("ul",[a("li",[t._v("assets/")]),t._v(" "),a("li",[t._v("lang/")]),t._v(" "),a("li",[t._v("views/")])])])])])])])])]),t._v(" "),a("li",[a("p",[t._v("Within "),a("strong",[t._v("Config")]),t._v(" folder, it contains application's configuration files. Let's just create two files as "),a("strong",[a("em",[t._v("system.php")])]),t._v(" and "),a("strong",[a("em",[t._v("paymentmethods.php")])])]),t._v(" "),a("ol",[a("li",[a("p",[a("b",[t._v("system.php")])]),t._v(" "),a("ul",[a("li",[t._v("Inside the file, you can include the code below as shown in image")])]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[t._v("    "),a("span",{pre:!0,attrs:{class:"token php language-php"}},[a("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'key'")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'sales.paymentmethods.paypal_standard'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'name'")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'admin::app.admin.system.paypal-standard'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'sort'")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'fields'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                        "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'name'")]),t._v("          "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'title'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                        "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'title'")]),t._v("         "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'admin::app.admin.system.title'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                        "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'type'")]),t._v("          "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'text'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                        "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'validation'")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'required'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                        "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'channel_based'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean constant"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                        "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'locale_based'")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean constant"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                        "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'name'")]),t._v("          "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'description'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                        "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'title'")]),t._v("         "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'admin::app.admin.system.description'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                        "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'type'")]),t._v("          "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'textarea'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                        "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'channel_based'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean constant"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                        "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'locale_based'")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean constant"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                        "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'name'")]),t._v("       "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'business_account'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                        "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'title'")]),t._v("      "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'admin::app.admin.system.business-account'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                        "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'type'")]),t._v("       "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'select'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                        "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'type'")]),t._v("       "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'text'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                        "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'validation'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'required'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                        "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'name'")]),t._v("          "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'active'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                        "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'title'")]),t._v("         "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'admin::app.admin.system.status'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                        "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'type'")]),t._v("          "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'boolean'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                        "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'validation'")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'required'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                        "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'channel_based'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean constant"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                        "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'locale_based'")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean constant"}},[t._v("true")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                        "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'name'")]),t._v("          "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'sandbox'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                        "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'title'")]),t._v("         "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'admin::app.admin.system.sandbox'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                        "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'type'")]),t._v("          "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'boolean'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                        "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'validation'")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'required'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                        "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'channel_based'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean constant"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                        "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'locale_based'")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean constant"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                        "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'name'")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'sort'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                        "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'title'")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'admin::app.admin.system.sort_order'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                        "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'type'")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'select'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                        "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'options'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                                "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'title'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                                "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'value'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                                "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'title'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'2'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                                "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'value'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                                "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'title'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'3'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                                "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'value'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                                "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'title'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'4'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                                "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'value'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])]),t._v(" "),a("p",[a("b",[t._v("Explanation for the keys:")])]),t._v(" "),a("ul",[a("li",[a("p",[a("b",[t._v("key:")]),t._v(" these values provided are unique and concatenated with '.' (dot) operator. After the creation of two nested, other keys written are display in the browser in the form of accordion")])]),t._v(" "),a("li",[a("p",[a("b",[t._v("name:")]),t._v(" these keys accept the value as a placeholder of your configuration. Generally, in bagisto, we consider writing it using translation.")])]),t._v(" "),a("li",[a("p",[a("b",[t._v("sort:")]),t._v(" these keys accept the sort position for the configuration menu.")])]),t._v(" "),a("li",[a("p",[a("b",[t._v("fields")]),t._v(" these keys accept the array for the value of the custom configuration.")])])])]),t._v(" "),a("li",[a("p",[a("b",[t._v("paymentmethods.php")])]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[t._v("    "),a("span",{pre:!0,attrs:{class:"token php language-php"}},[a("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'paypal_standard'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n               "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'code'")]),t._v("        "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'paypal_standard'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n               "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'title'")]),t._v("       "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'Paypal Standard'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n               "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'description'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'Paypal Standard'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n               "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'class'")]),t._v("       "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'Webkul\\Paypal\\Payment\\Standard'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n               "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'sandbox'")]),t._v("     "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean constant"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n               "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'active'")]),t._v("      "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean constant"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n               "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'sort'")]),t._v("        "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])]),a("p",[a("b",[t._v("Explanation for the keys:")])]),t._v(" "),a("ul",[a("li",[a("b",[t._v("code:")]),t._v(" a text to represent payment method")]),t._v(" "),a("li",[a("b",[t._v("title:")]),t._v(" in this field, the name of payment method is specified")]),t._v(" "),a("li",[a("b",[t._v("description:")]),t._v(" a brief description of the payment method.")]),t._v(" "),a("li",[a("b",[t._v("class:")]),t._v(" this field includes the class namespace where all functions of payment method are written")]),t._v(" "),a("li",[a("b",[t._v("sandbox:")]),t._v(" this is a custom option of boolean type")]),t._v(" "),a("li",[a("b",[t._v("active:")]),t._v(" this field accepts true/false to enable or disable the module.")]),t._v(" "),a("li",[a("b",[t._v("sort:")]),t._v(" these keys accept the sort position for the payment.")])])])])]),t._v(" "),a("li",[a("p",[t._v("Within "),a("strong",[t._v("Database")]),t._v(" folder, the migration and seeder(if needed) files are stored.")])]),t._v(" "),a("li",[a("p",[t._v("Within "),a("strong",[t._v("Resources")]),t._v(" folder your views as well as your raw, un-compiled assets such as SASS, or JavaScript. This directory also houses all of your language files.")])]),t._v(" "),a("li",[a("p",[t._v("Within "),a("strong",[t._v("Providers")]),t._v(" folder all of the service providers for your application. Service providers bootstrap your application by binding services in the service container, registering events, or performing any other tasks to prepare your application for incoming requests.")]),t._v(" "),a("p",[t._v("Here, in our case, we have created two providers files i.e.,")]),t._v(" "),a("ol",[a("li",[a("p",[a("strong",[a("em",[t._v("EventServiceProvider")])]),t._v(" : In this file, events included with your application provides a convenient place to register all of your application's event listeners.")])]),t._v(" "),a("li",[a("p",[a("strong",[a("em",[t._v("PaymentServiceProvider")])]),t._v(" : In this file, you may register all your configuration, language, and routes within register and boot methods.")])])])]),t._v(" "),a("li",[a("p",[t._v("Within "),a("strong",[t._v("Models")]),t._v(" folder, the models are stored for the application.")])]),t._v(" "),a("li",[a("p",[t._v("Within "),a("strong",[t._v("Payment")]),t._v(" folder, write the code needed to operate your payment method")])]),t._v(" "),a("li",[a("p",[t._v("Within "),a("strong",[t._v("Repositories")]),t._v(" folder, create a file as "),a("strong",[a("em",[t._v("HelloWorldRepository.php")])]),t._v(" which must extend repository class")])]),t._v(" "),a("li",[a("p",[t._v("Within "),a("strong",[t._v("Http")]),t._v(" folder, define your routes and controller application.")])]),t._v(" "),a("li",[a("p",[t._v("Within "),a("strong",[t._v("Listeners")]),t._v(" folder, this folder includes listener files to listen to respective events.")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);