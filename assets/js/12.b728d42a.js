(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{457:function(t,s,a){t.exports=a.p+"assets/img/bagisto_reviews_cust_id.82b878ea.jpg"},458:function(t,s,a){t.exports=a.p+"assets/img/bagisto_reviews_cust_page.b56d32c8.jpg"},459:function(t,s,a){t.exports=a.p+"assets/img/bagisto_reviews_cust_no_page.18ac3613.jpg"},533:function(t,s,a){"use strict";a.r(s);var e=a(27),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"customer-s-reviews"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#customer-s-reviews"}},[t._v("#")]),t._v(" Customer's Reviews")]),t._v(" "),e("h2",{attrs:{id:"_1-get-all-reviews-of-specific-customer"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-get-all-reviews-of-specific-customer"}},[t._v("#")]),t._v(" 1. Get All Reviews Of Specific Customer: "),e("a",{attrs:{id:"get-reviews-of-customer"}})]),t._v(" "),e("p",[t._v("To get all the reviews of a specific customer, you have to pass a "),e("strong",[e("code",[t._v("customer_id")])]),t._v(" as a query parameter like "),e("strong",[e("code",[t._v("reviews?customer={id}")])]),t._v(" in API url. To use this API call customer authentication is not required.")]),t._v(" "),e("blockquote",[e("p",[e("em",[t._v("https://example.com/public/api/reviews?customer_id={id}")])])]),t._v(" "),e("p",[e("strong",[t._v("Note")]),t._v(": "),e("em",[t._v("In the "),e("code",[t._v("reviews?customer_id={id}")]),t._v(" resource API call, we used "),e("code",[t._v("GET HTTP verb")]),t._v(" to get all the reviews of a customer.")])]),t._v(" "),e("h5",{attrs:{id:"request"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#request"}},[t._v("#")]),t._v(" Request:")]),t._v(" "),e("blockquote",[e("p",[e("em",[t._v("https://example.com/public/api/reviews?customer_id=6")])])]),t._v(" "),e("h5",{attrs:{id:"response"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#response"}},[t._v("#")]),t._v(" Response:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v('{\n    "data": [\n        {\n            "id": 4,\n            "title": "Great product & Service!!!",\n            "rating": "4.0",\n            "comment": "Beautiful bangles. Better than I expected.",\n            "name": "John Doe",\n            "status": "approved",\n        },\n        {\n            "id": 2,\n            "title": "Awesome Product & Service ",\n            "rating": "3.0",\n            "comment": "Awesome Product & Service ",\n            "name": "John Doe",\n            "status": "approved",\n        },\n        {...}\n    ],\n    "links": {\n        "first": "http://localhost/public/api/reviews?customer_id=1&page=1",\n        "last": "http://localhost/public/api/reviews?customer_id=1&page=1",\n    },\n    "meta": {...}\n}\n')])])]),e("p",[e("img",{attrs:{src:a(457),alt:"bagisto_reviews_cust_id"}}),t._v('{:class="screenshot-dimension center"}')]),t._v(" "),e("h3",{attrs:{id:"_1-1-get-customer-s-reviews-with-pagination"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-get-customer-s-reviews-with-pagination"}},[t._v("#")]),t._v(" 1.1 Get Customer's Reviews With Pagination: "),e("a",{attrs:{id:"get-customer-reviews-pagination"}})]),t._v(" "),e("p",[t._v("You can get customer's reviews according to the pagination. You can define the limit as to  how many records of reviews you want in each page.")]),t._v(" "),e("h6",{attrs:{id:"request-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#request-2"}},[t._v("#")]),t._v(" Request:")]),t._v(" "),e("blockquote",[e("p",[e("em",[t._v("https://example.com/public/api/reviews?customer_id=1&page=1")])])]),t._v(" "),e("blockquote",[e("p",[e("em",[t._v("https://example.com/public/api/reviews?customer_id=1&limit=3&page=1")])])]),t._v(" "),e("p",[e("strong",[t._v("Note")]),t._v(": "),e("em",[t._v("If you didn't use the page(?page=x) filter, then it returns the data of the first page by default. You can also provide the limit request parameter in the API url.")])]),t._v(" "),e("h6",{attrs:{id:"response-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#response-2"}},[t._v("#")]),t._v(" Response:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v('{\n    "data": [\n        {\n            "id": 2,\n            "title": "Awesome Product & Service ",\n            "rating": "3.0",\n            "comment": "Awesome Product & Service ",\n            "name": "John Doe",\n            "status": "approved",\n        },\n        {\n            "id": 1,\n            "title": "Awesome Product Quality",\n            "rating": "4.0",\n            "comment": "Awesome Product Quality",\n            "name": "John Doe",\n            "status": "approved",\n        }\n    ],\n    "links": {\n        "first": "http://localhost/public/api/reviews?customer_id=1&limit=2&page=1",\n        "last": "http://localhost/public/api/reviews?customer_id=1&limit=2&page=2",\n        "prev": "http://localhost/public/api/reviews?customer_id=1&limit=2&page=1",\n        "next": null\n    },\n    "meta": {...}\n}\n')])])]),e("p",[e("img",{attrs:{src:a(458),alt:"bagisto_reviews_cust_page"}})]),t._v(" "),e("h5",{attrs:{id:"explanation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#explanation"}},[t._v("#")]),t._v(" Explanation:")]),t._v(" "),e("ul",[e("li",[t._v("In the response above, you will find the three Objects with the indexes mentioned below:\n"),e("ol",[e("li",[t._v("data")]),t._v(" "),e("li",[t._v("link")]),t._v(" "),e("li",[t._v("meta")])])])]),t._v(" "),e("h4",{attrs:{id:"data-object"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#data-object"}},[t._v("#")]),t._v(" Data Object:")]),t._v(" "),e("p",[t._v("Under the data object, you will find a array of multiple objects which contain the details of the customer's reviews. You can use these objects to access the data of each individual customer's review.")]),t._v(" "),e("p",[e("strong",[t._v("Note")]),t._v(": "),e("em",[t._v("Regarding both link and meta objects, we already explained these objects functionality in")]),t._v(" "),e("a",{staticClass:"bagsito-link",attrs:{href:"api_category.html#link-object",target:"_blank"}},[e("em",[t._v("Category API")])]),t._v(" "),e("em",[t._v("section.")])]),t._v(" "),e("h3",{attrs:{id:"_1-2-get-customer-s-reviews-without-pagination"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-get-customer-s-reviews-without-pagination"}},[t._v("#")]),t._v(" 1.2 Get Customer's Reviews Without Pagination:")]),t._v(" "),e("p",[t._v("You can also get all of the customer's reviews of Bagisto Store in a single API call without using pagination. For this you have to pass "),e("strong",[e("code",[t._v("pagination=0")])]),t._v(" in the query parameter with the "),e("strong",[e("code",[t._v("reviews?customer_id={id}")])]),t._v(" resource in API URL.")]),t._v(" "),e("h6",{attrs:{id:"request-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#request-3"}},[t._v("#")]),t._v(" Request:")]),t._v(" "),e("blockquote",[e("p",[e("em",[t._v("https://example.com/public/api/reviews?customer_id=1pagination=0")])])]),t._v(" "),e("h5",{attrs:{id:"response-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#response-3"}},[t._v("#")]),t._v(" Response:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v('{\n    "data": [\n        {\n            "id": 4,\n            "title": "Great product & Service!!!",\n            "rating": "4.0",\n            "comment": "Beautiful bangles. Better than I expected.",\n            "name": "John Doe",\n            "status": "approved",\n        },\n        {...},\n        {...},\n        {...}\n    ]\n}\n')])])]),e("p",[e("img",{attrs:{src:a(459),alt:"bagisto_reviews_cust_no_page"}})]),t._v(" "),e("h1",{attrs:{id:"how-to-post-for-products-s-reviews"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#how-to-post-for-products-s-reviews"}},[t._v("#")]),t._v(" How To Post For Products's Reviews")]),t._v(" "),e("p",[t._v("To post a review of a specific product, you have to login as customer.{id} = Product_id in API url. To use this API call customer authentication is required.")]),t._v(" "),e("blockquote",[e("p",[e("em",[t._v("https://example.com/public/api/reviews/{id}/create")])])]),t._v(" "),e("h6",{attrs:{id:"post-data"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#post-data"}},[t._v("#")]),t._v(" Post Data:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v('{\n    "rating" : "3",\n    "title" : "This is dummy title",\n    "comment" : "This is the comment for the dummy title"\n}\n')])])]),e("h4",{attrs:{id:"response-4"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#response-4"}},[t._v("#")]),t._v(" Response:")]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"message"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Your review submitted successfully."')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"data"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"title"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"This is dummy title"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"rating"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"3.0"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"comment"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"This is the comment for the dummy title"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Mohammad Asif"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"status"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pending"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"product"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("23")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"simple"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"white shirt"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"url_key"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"key"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"price"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"formated_price"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"$1,000.00"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"short_description"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<p>lorem</p>"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"description"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<p>lorem ipsum</p>"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"sku"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ssh"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"images"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("..."),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" ..."),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"base_image"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" ... "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"variants"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"in_stock"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"reviews"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" ... "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"is_saved"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"created_at"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" ... "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"updated_at"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" ... "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"customer"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" ... "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"created_at"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" ... "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"updated_at"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" ... "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"created_at"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" ... "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"updated_at"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" ... "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);