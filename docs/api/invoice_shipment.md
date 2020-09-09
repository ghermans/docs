# How To Create Requests For Invoices

## 1. Get All Invoices Of All Orders: <a id="get-all-invoices"></a>

You can get all the invoices of the Bagisto Store's orders. To get the invoices of the store, the customer must be logged-in to the Bagisto Store. You can achieve this job by using **`invoices`** API call resource.
Currently, this **`invoices`** resource is helpful for both admin user and customer too.

> _http(s)://example.com/public/api/invoices_

**Note**: _In the `invoices` resource API call, we used `GET HTTP verb` to get all the invoices of the Bagisto Store's orders._

##### Request:

> _http(s)://example.com/public/api/invoices_

##### Response:

    {
        "data": [
            {
                "id": 2,
                "state": "paid",
                "email_sent": 0,
                "total_qty": 4,
                "sub_total": "190.0000",
                "base_sub_total": "190.0000",
                "grand_total": "230.0000",
                "order_address": {...},
                "transaction_id": null,
                "items": [
                    {...},
                    {...}
                ],
            },
            {...}
        ],
        "links": {
            "first": "http://localhost/public/api/invoices?page=1",
            "last": "http://localhost/public/api/invoices?page=1",
            "prev": null,
            "next": null
        },
        "meta": {...}
    }

![bagisto_invoices](../assets/images/api/bagisto_invoices.jpg){:class="screenshot-dimension center"}

### 1.1 Get Invoices With Pagination: <a id="get-all-invoices-with-pagination"></a>

> _http(s)://example.com/public/api/invoices?&limit=5&page=1_

**Note**: _If you didn't use the page(?page=x) filter, then it returns the data of the first page by default. You can provide both limit and page request parameters in the API url._

### 1.2 Get Invoices Without Pagination: <a id="get-all-invoices-without-pagination"></a>

> _http(s)://example.com/public/api/invoices?pagination=0_

**Note**: _If you didn't want invoices records according to pagination, then you can pass the `pagination=0` query parameter in the API url._

## 2. Get Specific Order's Invoice Based on Order Id: <a id="get-specific-order-invoices"></a>

To get the details of a  specific order's invoice, you have to pass an order_id as a query parameter like **`invoies?order_id={id}`** in API url. By using this resource and query parameter, you will get only a single invoice detail regarding the provided `order_id` in response.

> _http(s)://example.com/public/api/invoices?order_id={id}_

**Note**: _In the `'invoices?order_id={id}'` resource API call, we used `GET HTTP verb` to get the invoice of a single order._

##### Request:

> _http(s)://example.com/public/api/invoices?order_id=3_

##### Response:

    {
        "data": [
            {
                "id": 1,
                "state": "paid",
                "email_sent": 0,
                "total_qty": 2,
                "sub_total": "60.0000",
                "grand_total": "80.0000",
                "shipping_amount": "20.0000",
                "items": [
                    {...},
                    {...}
                ],
            }
        ],
        "links": {
            "first": "http://localhost/public/api/invoices?order_id=3&page=1",
            "last": "http://localhost/public/api/invoices?order_id=3&page=1",
            "prev": null,
            "next": null
        },
        "meta": {...}
    }

![bagisto_invoices_order_id](../assets/images/api/bagisto_invoices_order_id.jpg){:class="screenshot-dimension center"}

## 3. Get Specific Invoice Based on Invoice Id: <a id="get-specific-invoice-id"></a>

To get the details of a  specific invoice, you have to pass an invoice_id as a request payload like **`invoies/{id}`** in API url. By using this resource and request payload, you will get only `a single object` of invoice detail under the **`data object`** in response.

> _http(s)://example.com/public/api/invoices/{id}_

- This **`invoices/{id}`** API call resource will return the single invoice details, only if the customer has logged in to the store.

**Note**: _In the_ **`'invoices/{id}'`** _resource API call, we used `GET HTTP verb` to get the single invoice detail based on_ invoice_id.

##### Request:

> _http(s)://example.com/public/api/invoices/2_

##### Response:

    {
        "data": {
            "id": 2,
            "state": "paid",
            "email_sent": 0,
            "total_qty": 4,
            "sub_total": "190.0000",
            "grand_total": "230.0000",
            "shipping_amount": "40.0000",
            "tax_amount": "0.0000",
            "discount_amount": "0.0000",
            "order_address": {...},
            "transaction_id": null,
            "items": [
                {...},
                {...}
            ],
        }
    }

![bagisto_invoices_id](../assets/images/api/bagisto_invoices_id.jpg){:class="screenshot-dimension center"}

# How To Create Requests For Shipments <a id="request-shipments"></a>

![](assets/images/icons/Icon-Pencil-Large.svg){:.pencil-icon}
[edit on github](https://github.com/bagisto/bagisto-docs/blob/master/api_invoice_shipment.md){:class="edit-github" target="\_blank"}

## 1. Get All Shipments Of All Orders:

You can get all the shipments of the Bagisto Store. To get the shipments of the store, the customer must be logged in to the Bagisto Store. You can achieve this job by using **`shipments`** API call resource.
Currently, this **`shipments`** resource is helpful for both admin user and customer too.

> _http(s)://example.com/public/api/shipments_

**Note**: _In the **`'shipments'`** resource API call, we used `GET HTTP verb` to get all the shipments of the Bagisto Store._

##### Request:

> _http(s)://example.com/public/api/shipments_

##### Response:

    {
        "data": [
            {
                "id": 1,
                "total_qty": 2,
                "total_weight": null,
                "carrier_title": "DHL Shipping",
                "track_number": "1234566",
                "customer": {...},
                "inventory_source": {
                    "id": 1,
                    "name": "Default",
                    "contact_name": "Detroit Warehouse",
                    "contact_email": "warehouse@example.com",
                    "contact_number": "1234567899",
                    "country": "US",
                    "state": "MI",
                    "city": "Detroit",
                    "street": "12th Street",
                    "postcode": "48127",
                },
                "items": [{...},{...}]
            }
        ],
        "links": {...},
        "meta": {...}
    }

![bagisto_shipments](../assets/images/api/bagisto_shipments.jpg){:class="screenshot-dimension center"}

### 1.1 Get Shipments With Pagination: <a id="get-shipments-with-pagination"></a>

> _http(s)://example.com/public/api/shipments?&limit=5&page=1_

**Note**: _If you didn't use the page(?page=x) filter, then it returns the data of the first page by default. You can provide both limit and page request parameters in the API url._

### 1.2 Get Shipments Without Pagination: <a id="get-shipments-without-pagination"></a>

> _http(s)://example.com/public/api/shipments?pagination=0_

**Note**: _If you didn't want shipments records according to pagination, then you can pass the `pagination=0` query parameter in the API url_.

## 2. Get Specific Order's Shipment Based on Order Id: <a id="get-specific-shipment-order-id"></a>

To get the details of a  specific order's shipment, you have to pass an **`'order_id'`** as a query parameter like **`shipments?order_id={id}`** in API url. By using this resource and query parameter, you will get only a single shipment detail in API response based on the provided `order_id`.

> _http(s)://example.com/public/api/shipments?order_id={id}_

**Note**: _In the `'shipments?order_id={id}'` resource API call, we used `GET HTTP verb` to get the shipment of a single order_.

##### Request:

> _http(s)://example.com/public/api/shipments?order_id=3_

##### Response:

    {
        "data": [
            {
                "id": 1,
                "total_qty": 2,
                "total_weight": null,
                "carrier_code": null,
                "carrier_title": "DHL Shipping",
                "track_number": "1234566",
                "customer": {...},
                "inventory_source": {...},
                "items": [
                    {...},
                    {...}
                ]
            }
        ],
        "links": {
            "first": "http://localhost/public/api/shipments?order_id=3&page=1",
            "last": "http://localhost/public/api/shipments?order_id=3&page=1",
            "prev": null,
            "next": null
        },
        "meta": {...}
    }

![bagisto_ship_order_id](../assets/images/api/bagisto_ship_order_id.jpg){:class="screenshot-dimension center"}

## 3. Get Specific Shipment Based on Shipment Id: <a id="get-specific-shipment-shipment-id"></a>

To get the details of a  specific shipment, you have to pass a **`shipment_id`** as a request payload like **`shipments/{id}`** in API url. By using this resource and request payload, you will get only `a single object` of shipment detail under the **`data object`** in response.

> _http(s)://example.com/public/api/shipments/{id}_

- This **`shipments/{id}`** API call resource will return the single shipment details, only if the customer has logged in to the store.

**Note**: _In the **`'shipments/{id}'`** resource API call, we used `GET HTTP verb` to get the single shipment detail based on `shipment_id`._

##### Request:

> _http(s)://example.com/public/api/shipments/1_

##### Response:

    {
        "data": {
            "id": 1,
            "total_qty": 2,
            "total_weight": null,
            "carrier_code": null,
            "carrier_title": "DHL Shipping",
            "track_number": "1234566",
            "email_sent": 0,
            "customer": {...},
            "inventory_source": {...},
            "items": [
                {...},
                {...}
            ]
        }
    }

![bagisto_shipment_id](../assets/images/api/bagisto_shipment_id.jpg){:class="screenshot-dimension center"}
