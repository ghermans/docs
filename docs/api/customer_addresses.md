---
title: API Customer Addresses
---

# Addresses

## Create a new address

To add a address, you have to use the **`addresses/create`** endpoint url and have to pass the address fields in the request payload.  
This `addresses/create` API call resource will create a new address of the customer, only if that customer has logged in the store.

::: details Request example
```php
$client = new http\Client;
$request = new http\Client\Request;

$request->setRequestUrl('https://example.com/api/addresses/create');
$request->setRequestMethod('POST');
$request->setQuery(new http\QueryString(array(
  'address1' => [
      'Clock Tower'
    ],
  'city'           => 'Dehradun',
  'country'        => 'IN',
  "country_name"   => "India",
  'phone'          => '0123456798',
  'postcode'       => '248001',
  'state'          => 'UT'
)));

$client->enqueue($request)->send();
$response = $client->getResponse();

echo $response->getBody();
```
:::

::: details Response
```json
{
    "message":"Address has been created successfully.",
    "data": {...} // This contains the data you send to the api.
}
```
:::
## Get all addresses

To get the address of a customer, that customer must be logged in to the store.  
You can achieve this job by using `addresses` API call resource.

::: details Request example
```php
$client = new http\Client;
$request = new http\Client\Request;

$request->setRequestUrl('https://example.com/api/addresses');
$request->setRequestMethod('GET');

$client->enqueue($request)->send();
$response = $client->getResponse();

echo $response->getBody();
```
:::

::: details Response
```json
{
    "data": [
        {
            "id": 3,
            "address1": [...],
            "country": "IN",
            "country_name": "India",
            "state": "UT",
            "city": "Dehradun",
            "postcode": 248001,
            "phone": "01345679",
        },
        {
            "id": 2,
            "address1": [...],
            "country": "IN",
            "country_name": "India",
            "state": "UP",
            "city": "Noida",
            "postcode": 201301,
            "phone": "012345679",
        },
    ],
    "links": {...},
    "meta": {...}
}
```
:::

### Get addresses with pagination

::: details GET request
```
https://example.com/api/addresses?page=1
https://example.com/api/addresses?limit=5&page=1
```
**Note**: _If you didn't use the `page(?page=x)` filter, then it returns the data of the first page by default. You can also provide the limit request parameter in the API url._
:::

::: details Response
```json
{
    "data": [
        {
            "id": 3,
            "address1": [...],
            "country": "IN",
            "country_name": "India",
            "state": "UT",
            "city": "Dehradun",
            "postcode": 248001,
            "phone": "01345679",
        },
        {
            "id": 2,
            "address1": [...],
            "country": "IN",
            "country_name": "India",
            "state": "UP",
            "city": "Noida",
            "postcode": 201301,
            "phone": "012345679",
        },
        {...}
    ],
    "links": {
        "first": "http://localhost/api/addresses?limit=2&page=1",
        "last": "http://localhost/api/addresses?limit=2&page=1",
        "prev": null,
        "next": "http://localhost/api/addresses?limit=2&page=2",
    },
    "meta": {
        "current_page": 1,
        "from": 1,
        "last_page": 2,
        "path": "http://localhost/api/addresses",
        "per_page": "2",
        "to": 2,
        "total": 3
    }
}
```
:::

### Explanation:

| Name  | description |
| ----- | ----------- |
| data  | Find a collection of many objects which will contain the details of the address of the logged in customer. You can use the addresses index data by accessing these addresses sub-objects.|
| link | |
| meta | | 

### 1.2 Get Addresses Without Pagination:

You can also get all the addresses at once without pagination of a customer from Bagisto Store. To get the addresses of a customer, that customer must be logged in Bagisto Store, for this you have to pass **`pagination=0`** in the query parameter in API URL.

::: details GET request
```
https://example.com/api/addresses?pagination=0
```
::: 

::: tip
Here you will find only the data object with the `?pagination=0` query parameter.  
The link and meta object will not return.
:::

::: details Response
```json
{
    "data": [
        {
            "id": 3,
            "address1": [...],
            "country": "IN",
            "country_name": "India",
            "state": "UT",
            "city": "Dehradun",
            "postcode": 248001,
            "phone": "01345679",
        },
        {
            "id": 2,
            "address1": [...],
            "country": "IN",
            "country_name": "India",
            "state": "UP",
            "city": "Noida",
            "postcode": 201301,
            "phone": "012345679",
        },
        {...}
    ]
}
```
:::


## Get data based on the address id

To get the customer's specific address, you have to pass an address_id as a request payload like **`addresses/{address_id}`** in API url. By using this resource and request payload, you will get only `a single object` under **`data object`** in response.

::: details GET Request
```
https://example.com/api/addresses/{id}
```
:::

This `addresses/{id}` API call resource will return the customer's address details, only if the customer has logged in currently into the store.

**Note**: _In the `addresses/{id}` resource API call, we used `GET HTTP verb` to get the login customer's address._

::: details Response
```json
{
    "data": {
        "id": 1,
        "address1": [
            "Block H-ARP Park, Sector 63 "
        ],
        "country": "IN",
        "country_name": "India",
        "state": "UP",
        "city": "Noida",
        "postcode": 201301,
        "phone": "0132456789",
        "created_at": {
            "date": "",
            "timezone_type": 3,
            "timezone": "Asia/Kolkata"
        },
        "updated_at": {
            "date": "",
            "timezone_type": 3,
            "timezone": "Asia/Kolkata"
        },
    }
}
```
:::

## Update a specific address

To update the customer's specific address, you have to pass an address_id as a request payload like **`addresses/{address_id}`** in API url.

::: details PUT Request
```
https://example.com/public/api/addresses/{id}
```
::: 

- This `addresses/{id}` API call resource will modify the customer's address details, only if the customer has logged in currently into the store.

::: details Request example
```json
{
    id: 3
    address1: [
        "Clock Tower"
    ]
    city: "Dehradun"
    country: "IN"
    country_name: "India"
    phone: "0123456798"
    postcode: 248001
    state: "UT"
    created_at: {...}
    updated_at: {...}
}
```
:::

::: details Resonse
```json
{
    "message":"Your address has been updated successfully.",
    "data": {...} // Address's detail.
}
```
![bagisto_add_save](../assets/images/api/bagisto_add_save.jpg)
:::