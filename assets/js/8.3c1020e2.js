(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{445:function(t,a,e){t.exports=e.p+"assets/img/bagisto_cat_link.f8bd6e52.jpg"},446:function(t,a,e){t.exports=e.p+"assets/img/bagisto_cat_meta.47625f4d.jpg"},447:function(t,a,e){t.exports=e.p+"assets/img/bagisto_cat_path.e1616a77.jpg"},448:function(t,a,e){t.exports=e.p+"assets/img/bagisto_cat_no_pagination.3350fde7.jpg"},449:function(t,a,e){t.exports=e.p+"assets/img/bagisto_cat_single.65f010dc.jpg"},450:function(t,a,e){t.exports=e.p+"assets/img/bagisto_cat_descendant.e53deefd.jpg"},537:function(t,a,e){"use strict";e.r(a);var s=e(27),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"categories"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#categories"}},[t._v("#")]),t._v(" Categories")]),t._v(" "),s("p",[t._v("To get all the categories from Bagisto according to pagination, you have to place a request by using the API Call below with the resource i.e. "),s("code",[t._v("categories")]),t._v(" :")]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("Request Example")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$url")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[t._v('"https://example.com/api/categories"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$ch")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl_init")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl_setopt")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$ch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("CURLOPT_URL")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$url")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Prevent cURL from trying to verify the SSL certificate (only in dev environments)")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl_setopt")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$ch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("CURLOPT_SSL_VERIFYPEER")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean constant"}},[t._v("FALSE")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl_setopt")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$ch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("CURLOPT_RETURNTRANSFER")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$output")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl_exec")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$ch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$data")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("json_decode")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$output")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl_close")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$ch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("print_r")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$data")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("Response")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"data"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"code"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token null keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Laptops"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"slug"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"laptops"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"display_mode"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"products_only"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"description"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"meta_title"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Laptops"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"meta_description"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"meta_keywords"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"status"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"image_url"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token null keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"additional"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token null keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"created_at"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2020-09-08T23:41:24.000000Z"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"updated_at"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2020-09-08T23:41:24.000000Z"')]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"links"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"first"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://example.com/api/categories?page=1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"last"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://example.com/api/categories?page=1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"prev"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token null keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"next"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token null keyword"}},[t._v("null")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"meta"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"current_page"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"from"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"last_page"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"path"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://example.com/api/categories"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"per_page"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"to"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"total"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("If you didn't use the page(?page=x) filter, then it returns the data of the first page by default.")])])]),t._v(" "),s("h3",{attrs:{id:"explanation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#explanation"}},[t._v("#")]),t._v(" Explanation:")]),t._v(" "),s("p",[t._v("In the response above, you will find the three Objects with the indexes mentioned below:")]),t._v(" "),s("ol",[s("li",[t._v("data")]),t._v(" "),s("li",[t._v("link")]),t._v(" "),s("li",[t._v("meta")])]),t._v(" "),s("h4",{attrs:{id:"data-object"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#data-object"}},[t._v("#")]),t._v(" Data Object: "),s("a",{attrs:{id:"data-object"}})]),t._v(" "),s("p",[t._v("Under the data object, you will find the collection of many objects which represent the bagisto store's categories. You can use the category's index data by accessing these categories sub-objects.")]),t._v(" "),s("h4",{attrs:{id:"link-object"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#link-object"}},[t._v("#")]),t._v(" link object: "),s("a",{attrs:{id:"link-object"}})]),t._v(" "),s("ul",[s("li",[t._v("Under link object, you will find four indexes, which will be used only according to pagination:")])]),t._v(" "),s("p",[s("img",{attrs:{src:e(445),alt:"bagisto_cat_link"}})]),t._v(" "),s("p",[s("strong",[t._v("1. "),s("code",[t._v("first")]),t._v(": It will represent the first url link of the called API with filter variable "),s("code",[t._v("page:first_page")])])]),t._v(" "),s("blockquote",[s("p",[s("em",[t._v("https://example.com/public/api/categories?page=1")])])]),t._v(" "),s("p",[s("strong",[t._v("2. "),s("code",[t._v("last")]),t._v(": It will represent the last url link of the called API with filter variable "),s("code",[t._v("page:last_page")])])]),t._v(" "),s("blockquote",[s("p",[s("em",[t._v("https://example.com/public/api/categories?page=10")])])]),t._v(" "),s("p",[s("strong",[t._v("3. "),s("code",[t._v("prev")]),t._v(": It will represent the previous url of the currently called API url. For Example:")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("Current_URL -")]),t._v(" "),s("blockquote",[s("p",[s("em",[t._v("https://example.com/public/api/categories?page=4")])])])]),t._v(" "),s("li",[s("p",[t._v("prev_URL -")]),t._v(" "),s("blockquote",[s("p",[s("em",[t._v("https://example.com/public/api/categories?page=3")])])])])]),t._v(" "),s("p",[s("strong",[t._v("4. "),s("code",[t._v("next")]),t._v(": It will show you the next url of the currently called API url. If no next url will available then it will contain the "),s("code",[t._v("null")]),t._v(" value.")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("Current_URL -")]),t._v(" "),s("blockquote",[s("p",[s("em",[t._v("https://example.com/public/api/categories?page=4")])])])]),t._v(" "),s("li",[s("p",[t._v("prev_URL -")]),t._v(" "),s("blockquote",[s("p",[s("em",[t._v("https://example.com/public/api/categories?page=5")])])])])]),t._v(" "),s("h4",{attrs:{id:"meta-object"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#meta-object"}},[t._v("#")]),t._v(" meta object: "),s("a",{attrs:{id:"meta-object"}})]),t._v(" "),s("ul",[s("li",[s("code",[t._v("meta")]),t._v(" object will only used with pagination. Under meta object, you will find seven indexes:")])]),t._v(" "),s("p",[s("img",{attrs:{src:e(446),alt:"bagisto_cat_meta"}}),t._v('{:class="screenshot-dimension center"}')]),t._v(" "),s("p",[s("strong",[t._v("1. "),s("code",[t._v("current_page")]),t._v(": It will contain the value of currently called page "),s("code",[t._v("current_page:1")])])]),t._v(" "),s("blockquote",[s("p",[s("em",[t._v("https://example.com/public/api/categories?page=2")]),t._v("\n{")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v('"meta": {\n    "current_page": 2,\n}\n')])])]),s("p",[t._v("}")]),t._v(" "),s("p",[s("strong",[t._v("2. "),s("code",[t._v("from")]),t._v(": It will contain the first count of the returned data object based on the provided page and limit filters as parameter "),s("code",[t._v("from = (limit * (page-1)) + 1")]),t._v(".")])]),t._v(" "),s("ul",[s("li",[t._v("For Example: If you called categories API with page filter 2 "),s("code",[t._v("i.e. ?page=2")]),t._v(" and a limit filter of 5 "),s("code",[t._v("i.e. ?limit=5")]),t._v(", then "),s("code",[t._v("from")]),t._v(" will contain the value "),s("code",[t._v("6")]),t._v(".")])]),t._v(" "),s("blockquote",[s("p",[s("em",[t._v("https://example.com/public/api/categories?limit=5&page=2")])])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("limit = 5\npage = 2\nfrom = (5 * (2-1)) + 1  i.e. 6\n")])])]),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v('    {\n        "meta": {\n            "current_page": 2,\n            "from": 6,\n        }\n    }\n')])])]),s("p",[s("strong",[t._v("3. "),s("code",[t._v("to")]),t._v(": It will return, the last count of the returned data object based on the provided page and limit filters as parameter "),s("code",[t._v("to = (limit * page)")]),t._v(".")])]),t._v(" "),s("ul",[s("li",[t._v("For Example: If you called categories API with page filter 2 "),s("code",[t._v("i.e. ?page=2")]),t._v(" and a limit filter of 5 "),s("code",[t._v("i.e. ?limit=5")]),t._v(", then "),s("code",[t._v("to")]),t._v(" will contain the value "),s("code",[t._v("10")]),t._v(".")])]),t._v(" "),s("blockquote",[s("p",[t._v("https://example.com/public/api/categories?limit=5&page=2")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("limit = 5\npage = 2\nfrom = (5 * 2)  i.e. 10\n")])])]),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v('    {\n        "meta": {\n            "current_page": 2,\n            "from": 6,\n            "to": 10,\n        }\n    }\n')])])]),s("p",[s("strong",[t._v("4. "),s("code",[t._v("per_page")]),t._v(": It will contain the total of record number that will want in a single page "),s("code",[t._v("per_page = limit")]),t._v(".")])]),t._v(" "),s("blockquote",[s("p",[s("em",[t._v("https://example.com/public/api/categories?limit=5&page=1")])])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v('    {\n        "meta": {\n            "current_page": 2,\n            "from": 6,\n            "to": 10,\n            "per_page": 5,\n        }\n    }\n')])])]),s("p",[s("strong",[t._v("5. "),s("code",[t._v("last_page")]),t._v(": It will contain the value of total of pages. This index value will depend on the limit input parameter and the total number of records "),s("code",[t._v("last_page = (total number of records / limit)")]),t._v(".")])]),t._v(" "),s("ul",[s("li",[t._v("For Example: Suppose there are total 50 categies and you want to fetch them in slot of 10 in each pages, then there will be total 5 total pages "),s("code",[t._v("last_page = ( ceil(50) / 10)")]),t._v(".")])]),t._v(" "),s("blockquote",[s("p",[s("em",[t._v("https://example.com/public/api/categories?limit=10&page=1")])])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v('    {\n        "meta": {\n            "current_page": 1,\n            "from": 1,\n            "to": 10,\n            "per_page": 10,\n            "last_page": 5,\n        }\n    }\n')])])]),s("p",[s("strong",[t._v("6. "),s("code",[t._v("total")]),t._v(": It will contain the value of total number of records in the store. "),s("code",[t._v("total = total number of records")]),t._v(".")])]),t._v(" "),s("blockquote",[s("p",[s("em",[t._v("https://example.com/public/api/categories?limit=10&page=1")])])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v('    {\n        "meta": {\n            "current_page": 1,\n            "from": 1,\n            "to": 10,\n            "per_page": 10,\n            "last_page": 5,\n            "total": 50,\n        }\n    }\n')])])]),s("p",[s("strong",[t._v("7. "),s("code",[t._v("path")]),t._v(": It will contain the current api url without input parameters.")])]),t._v(" "),s("blockquote",[s("p",[s("em",[t._v("https://example.com/public/api/categories?limit=10&page=1")])])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v('    {\n        "meta": {\n            "current_page": 1,\n            "from": 1,\n            "to": 10,\n            "per_page": 10,\n            "last_page": 5,\n            "total": 50,\n            "path": "https://example.com/public/api/categories",\n        }\n    }\n')])])]),s("p",[s("img",{attrs:{src:e(447),alt:"bagisto_cat_path"}}),t._v('{:class="screenshot-dimension center"}')]),t._v(" "),s("h2",{attrs:{id:"get-all-categories-without-pagination"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#get-all-categories-without-pagination"}},[t._v("#")]),t._v(" Get All Categories Without Pagination: "),s("a",{attrs:{id:"get-all-categories-without-pagination"}})]),t._v(" "),s("p",[t._v("If you don't want to use the pagination and want to access all the store's categories at once, then you have to send a filter parameter named: "),s("code",[t._v("pagination")]),t._v(" with value "),s("code",[t._v("zero")]),t._v(". By doing this you will get all categories objects at once under the data object and will not get the both link and meta objects.")]),t._v(" "),s("blockquote",[s("p",[s("strong",[t._v("Like: pagination=0")])])]),t._v(" "),s("blockquote",[s("p",[s("em",[t._v("https://example.com/public/api/categories?pagination=0")])])]),t._v(" "),s("p",[s("img",{attrs:{src:e(448),alt:"bagisto_cat_no_pagination"}}),t._v('{:class="screenshot-dimension center"}')]),t._v(" "),s("h2",{attrs:{id:"get-specific-category"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#get-specific-category"}},[t._v("#")]),t._v(" Get Specific Category: "),s("a",{attrs:{id:"get-specific-category"}})]),t._v(" "),s("p",[t._v("If you want the record of any specific category, then you have to provide the category id as as input parameter in API url.")]),t._v(" "),s("blockquote",[s("p",[s("em",[t._v("https://example.com/public/api/categories/1")])])]),t._v(" "),s("p",[s("img",{attrs:{src:e(449),alt:"bagisto_cat_single"}}),t._v('{:class="screenshot-dimension center"}')]),t._v(" "),s("p",[s("strong",[t._v("Note")]),t._v(": "),s("em",[t._v("Here you will see in the API response "),s("code",[t._v("data Object")]),t._v(" will only contain the single object of category record")])]),t._v(" "),s("h2",{attrs:{id:"get-direct-descendant-categories-of-specific-category"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#get-direct-descendant-categories-of-specific-category"}},[t._v("#")]),t._v(" Get Direct Descendant Categories Of Specific Category: "),s("a",{attrs:{id:"get-descendant-category"}})]),t._v(" "),s("p",[t._v("If you want to get the direct descendant categories (sub-categories) of any particular category, then you have to follow the below structure of calling the API.")]),t._v(" "),s("blockquote",[s("p",[s("em",[t._v("https://example.com/public/api/descendant-categories?parent_id=1")])])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("In the above API url we passed "),s("code",[t._v("parent_id")]),t._v(" as an input parameter for which we want to access the direct sub-categories.")])]),t._v(" "),s("li",[s("p",[t._v("For Example: Suppose there is a category named as "),s("code",[t._v("Men's Collection")]),t._v(" with "),s("code",[t._v("category_id=2")]),t._v(" that have two direct sub-categories named as "),s("code",[t._v("T-Shirt")]),t._v(" and "),s("code",[t._v("Men's Shoes")]),t._v(", then the API url will be:")])])]),t._v(" "),s("blockquote",[s("p",[s("em",[t._v("https://example.com/public/api/descendant-categories?parent_id=2")])])]),t._v(" "),s("p",[s("img",{attrs:{src:e(450),alt:"bagisto_cat_descendant"}}),t._v('{:class="screenshot-dimension center"}')])])}),[],!1,null,null,null);a.default=n.exports}}]);