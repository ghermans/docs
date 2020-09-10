(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{453:function(t,s,e){t.exports=e.p+"assets/img/bagisto_cust_wishlists.1d1a29e1.jpg"},454:function(t,s,e){t.exports=e.p+"assets/img/bagisto_wishlist_page.de525699.jpg"},455:function(t,s,e){t.exports=e.p+"assets/img/bagisto_wishlist_no_page.8db6977d.jpg"},456:function(t,s,e){t.exports=e.p+"assets/img/bagisto_wishlist_cust.5d9493f8.jpg"},457:function(t,s,e){t.exports=e.p+"assets/img/bagisto_wishlist_add.fdddfac5.jpg"},539:function(t,s,e){"use strict";e.r(s);var a=e(27),i=Object(a.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"how-to-requests-for-customer-s-wishlist"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-to-requests-for-customer-s-wishlist"}},[t._v("#")]),t._v(" How To Requests For Customer's Wishlist")]),t._v(" "),a("h2",{attrs:{id:"_1-get-all-customer-s-wishlists"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-get-all-customer-s-wishlists"}},[t._v("#")]),t._v(" 1. Get All Customer's Wishlists: "),a("a",{attrs:{id:"get-wishlists-of-customers"}})]),t._v(" "),a("p",[t._v("You can get all the wishlists of Bagisto Store's customers. To call this API customer must be logged-in to the Bagisto Store. You can achieve this job by using "),a("code",[t._v("wishlist")]),t._v(" API call resource.")]),t._v(" "),a("p",[a("strong",[t._v("Note")]),t._v(": "),a("em",[t._v("In the "),a("code",[t._v("wishlist")]),t._v(" resource API call, we used "),a("code",[t._v("GET HTTP verb")]),t._v(" to get all the wishlist of Bagisto's Store customers.")])]),t._v(" "),a("h6",{attrs:{id:"request"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#request"}},[t._v("#")]),t._v(" Request:")]),t._v(" "),a("blockquote",[a("p",[a("em",[t._v("https://example.com/public/api/wishlist")])])]),t._v(" "),a("h6",{attrs:{id:"response"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response"}},[t._v("#")]),t._v(" Response:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v('{\n    "data": [\n        {\n            "id": 9,\n            "product": {}\n        },\n        {\n            "id": 8,\n            "product": {}\n        },\n        {\n            "id": 7,\n            "product": {}\n        }\n    ],\n    "links": {\n        "first": "http://localhost/public/api/wishlist?page=1",\n        "last": "http://localhost/public/api/wishlist?page=1",\n        "prev": null,\n        "next": null\n    },\n    "meta": {\n        "current_page": 1,\n        "from": 1,\n        "last_page": 1,\n        "path": "http://localhost/public/api/wishlist",\n        "per_page": 10,\n        "to": 3,\n        "total": 3\n    }\n}\n')])])]),a("p",[a("img",{attrs:{src:e(453),alt:"bagisto_cust_wishlists"}}),t._v('{:class="screenshot-dimension center"}')]),t._v(" "),a("h3",{attrs:{id:"_1-1-get-wishlists-with-pagination"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-get-wishlists-with-pagination"}},[t._v("#")]),t._v(" 1.1 Get Wishlists With Pagination: "),a("a",{attrs:{id:"get-wishlists-with-pagination"}})]),t._v(" "),a("blockquote",[a("p",[a("em",[t._v("https://example.com/public/api/wishlist?page=1")])])]),t._v(" "),a("blockquote",[a("p",[a("em",[t._v("https://example.com/public/api/wishlist?limit=5&page=1")])])]),t._v(" "),a("p",[a("strong",[t._v("Note")]),t._v(": "),a("em",[t._v("If you didn't use the page(?page=x) filter, then it returns the data of the first page by default. You can also provide the limit request parameter in the API url.")])]),t._v(" "),a("p",[a("img",{attrs:{src:e(454),alt:"bagisto_wishlist_page"}}),t._v('{:class="screenshot-dimension center"}')]),t._v(" "),a("h6",{attrs:{id:"explanation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#explanation"}},[t._v("#")]),t._v(" Explanation:")]),t._v(" "),a("ul",[a("li",[t._v("In the response above, you will find the three Objects with the indexes mentioned below:\n"),a("ol",[a("li",[t._v("data")]),t._v(" "),a("li",[t._v("link")]),t._v(" "),a("li",[t._v("meta")])])])]),t._v(" "),a("h4",{attrs:{id:"data-object"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#data-object"}},[t._v("#")]),t._v(" Data Object:")]),t._v(" "),a("p",[t._v("Under the data object, you will find the collection of many objects which will contain the details of wishlists of the store's customer.")]),t._v(" "),a("p",[a("strong",[t._v("Note")]),t._v(": "),a("em",[t._v("Regarding both link and meta objects, we already explained these objects functionality in")]),t._v(" "),a("a",{staticClass:"bagsito-link",attrs:{href:"api_category.html#link-object",target:"_blank"}},[a("em",[t._v("Category API")])]),t._v(" "),a("em",[t._v("section")])]),t._v(" "),a("h3",{attrs:{id:"_1-2-get-wishlists-without-pagination"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-get-wishlists-without-pagination"}},[t._v("#")]),t._v(" 1.2 Get Wishlists Without Pagination: "),a("a",{attrs:{id:"get-wishlists-without-pagination"}})]),t._v(" "),a("p",[t._v("You can also get all the wishlists of Store's customers at once without pagination. To get the wishlists, customer must be logged-in to the Bagisto Store. For this you have to pass "),a("strong",[a("code",[t._v("pagination=0")])]),t._v(" in the query parameter in API URL.")]),t._v(" "),a("h6",{attrs:{id:"request-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#request-2"}},[t._v("#")]),t._v(" Request:")]),t._v(" "),a("blockquote",[a("p",[a("em",[t._v("https://example.com/public/api/wishlist?pagination=0")])])]),t._v(" "),a("h5",{attrs:{id:"response-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response-2"}},[t._v("#")]),t._v(" Response:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v('{\n    "data": [\n        {\n            "id": 9,\n            "product": {\n                "id": 5,\n                "type": "simple",\n                "name": "Home Decor Bottles",\n                "url_key": "home-decor-bottles",\n                "price": 10,\n                "formated_price": "$10.00",\n                "short_description": "<p>Home Decor Bottles</p>",\n                "description": "<p>Home Decor Bottles</p>",\n                "sku": "bottles",\n            }\n        },\n        {\n            "id": 8,\n            "product": {}\n        },\n        {\n            "id": 7,\n            "product": {}\n        }\n    ]\n}\n')])])]),a("p",[a("img",{attrs:{src:e(455),alt:"bagisto_wishlist_no_page"}}),t._v('{:class="screenshot-dimension center"}')]),t._v(" "),a("h2",{attrs:{id:"_2-get-all-wishlists-of-a-customer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-get-all-wishlists-of-a-customer"}},[t._v("#")]),t._v(" 2. Get all Wishlists Of A Customer: "),a("a",{attrs:{id:"get-all-wishlist-of-customer"}})]),t._v(" "),a("p",[t._v("To get all wishlists of a specific customer, you have to pass a "),a("code",[t._v("customer_id")]),t._v(" as a query parameter like "),a("strong",[a("code",[t._v("wishlist?customer_id={id}")])]),t._v(" in API url. By using this resource and query parameter, you will get a array of wishlist(s) objects of a customer under "),a("strong",[a("code",[t._v("data object")])]),t._v(" in response.")]),t._v(" "),a("blockquote",[a("p",[a("em",[t._v("https://example.com/public/api/wishlist?customer_id={id}")])])]),t._v(" "),a("p",[a("strong",[t._v("Note")]),t._v(": "),a("em",[t._v("In the "),a("code",[t._v("wishlist/?customer_id={id}")]),t._v(" resource API call, we used "),a("code",[t._v("GET HTTP verb")]),t._v(" to get all the wishlist(s) of a customer.")])]),t._v(" "),a("h5",{attrs:{id:"request-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#request-3"}},[t._v("#")]),t._v(" Request:")]),t._v(" "),a("blockquote",[a("p",[a("em",[t._v("https://example.com/public/api/wishlist?customer_id=1")])])]),t._v(" "),a("h5",{attrs:{id:"response-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response-3"}},[t._v("#")]),t._v(" Response:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v('{\n    "data": [\n        {\n            "id": 7,\n            "product": {...},\n        }\n    ],\n    "links": {\n        "first": "http://localhost/public/api/wishlist?customer_id=1&page=1",\n        "last": "http://localhost/public/api/wishlist?customer_id=1&page=1",\n        "prev": null,\n        "next": null\n    },\n    "meta": {\n        "current_page": 1,\n        "from": 1,\n        "last_page": 1,\n        "path": "http://localhost/public/api/wishlist",\n        "per_page": 10,\n        "to": 1,\n        "total": 1\n    }\n}\n')])])]),a("p",[a("img",{attrs:{src:e(456),alt:"bagisto_wishlist_cust"}}),t._v('{:class="screenshot-dimension center"}')]),t._v(" "),a("h2",{attrs:{id:"_3-add-product-to-wishlist"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-add-product-to-wishlist"}},[t._v("#")]),t._v(" 3. Add Product To Wishlist: "),a("a",{attrs:{id:"add-product-to-wishlist"}})]),t._v(" "),a("p",[t._v("To add a product to customer's wishlist, you have to pass a "),a("code",[t._v("product_id")]),t._v(" as a request payload like "),a("strong",[a("code",[t._v("wishlist/add/{id}")])]),t._v(" in API url.")]),t._v(" "),a("blockquote",[a("p",[a("em",[t._v("https://example.com/public/api/wishlist/add/{id}")])])]),t._v(" "),a("ul",[a("li",[t._v("This "),a("code",[t._v("wishlist/add/{id}")]),t._v(" API call resource will add a new wishlist for a specific product, only if the customer has logged in currently into the store.")])]),t._v(" "),a("p",[a("strong",[t._v("Note")]),t._v(": "),a("em",[t._v("In the "),a("code",[t._v("wishlist/add/{id}")]),t._v(" resource API call, we used "),a("code",[t._v("GET HTTP verb")]),t._v(" to add a new wishlist for a login customer.")])]),t._v(" "),a("h5",{attrs:{id:"request-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#request-4"}},[t._v("#")]),t._v(" Request:")]),t._v(" "),a("blockquote",[a("p",[a("em",[t._v("https://example.com/public/api/wishlist/add/{id}")])])]),t._v(" "),a("h5",{attrs:{id:"response-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response-4"}},[t._v("#")]),t._v(" Response:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v('{\n    "data": {\n        "id": 11,\n        "product": {\n            "id": 1,\n            "type": "simple",\n            "name": "Leather Shoes",\n            "url_key": "leather-shoes",\n            "price": 50,\n            "formated_price": "$50.00",\n            "short_description": "<p>Leather Shoes</p>",\n            "description": "<p>Leather Shoes</p>",\n            "sku": "men-leather-shoes"\n        }\n    },\n    "message": "Item Successfully Added To Wishlist"\n}\n')])])]),a("p",[a("img",{attrs:{src:e(457),alt:"bagisto_wishlist_add"}}),t._v('{:class="screenshot-dimension center"}')])])}),[],!1,null,null,null);s.default=i.exports}}]);