# Categories

In this section, we are using the categories api. This request will fetch all the categories.

## Get categories with pagination

This api request will fetch all the categories based on the `limit` and `page` params.

- Request

  `GET <host>/api/categories(?limit,page)`

- Params

  | Name          | Info                                          | Type   |
  | ------------- |:---------------------------------------------:| ------ |
  | limit         | Maximum number of records in each request.    | Number |
  | page          | Records for specific page based on the limit. | Number |

### Examples

#### 1. Get data of the specific page,

- Request

  `GET <host>/api/categories?page=1`

  ::: tip
  If you didn't use the page (?page=x) filter, then it returns the data of the first page by default.

  `GET <host>/api/categories`
  :::

  ::: details Response

  ~~~json
  {
      "data": [
          {
              "id": 3,
              "code": null,
              "name": "Laptops",
              "slug": "laptops",
              "display_mode": "products_only",
              "description": "",
              "meta_title": "Laptops",
              "meta_description": "",
              "meta_keywords": "",
              "status": 1,
              "image_url": null,
              "additional": null,
              "created_at": "2020-09-08T23:41:24.000000Z",
              "updated_at": "2020-09-08T23:41:24.000000Z"
          },
          {...},
          {...}
      ],
      "links": {
          "first": "https://example.com/api/categories?page=1",
          "last": "https://example.com/api/categories?page=1",
          "prev": null,
          "next": null
      },
      "meta": {
          "current_page": 1,
          "from": 1,
          "last_page": 1,
          "path": "https://example.com/api/categories",
          "per_page": 10,
          "to": 3,
          "total": 3
      }
  }
  ~~~

  :::

#### 2. Get data of the specific page with limit,

- Request

  `GET <host>/api/categories?page=1&limit=10`

  ::: details Response

  ~~~json
  {
      "data": [
          {
              "id": 10,
              "code": null,
              "name": "Lights",
              "slug": "lights",
              "display_mode": "products_only",
              "description": "",
              "meta_title": "",
              "meta_description": "",
              "meta_keywords": "",
              "status": 1,
              "image_url": null,
              "additional": null,
              "created_at": "2020-09-24T11:44:42.000000Z",
              "updated_at": "2020-09-24T11:44:42.000000Z"
          },
          {...},
          {...},
          {...},
          {...}
      ],
      "links": {
          "first": "https://example.com/api/categories?limit=5&page=1",
          "last": "https://example.com/api/categories?limit=5&page=2",
          "prev": null,
          "next": "https://example.com/api/categories?limit=5&page=2"
      },
      "meta": {
          "current_page": 1,
          "from": 1,
          "last_page": 2,
          "path": "https://example.com/api/categories",
          "per_page": "5",
          "to": 5,
          "total": 10
      }
  }
  ~~~

  :::

### Explanation

If you check the response below, you will find that there are three objects key i.e. `data`, `links` and `meta`.

  ~~~json
  {
      "data": [{...},{...},...,{...}],
      "links": {...},
      "meta": {...}
  }
  ~~~

#### 1. Data Object `data`

In the data object key, you will find the collection of many objects which represent the Bagisto store's categories.

#### 2. Links Object `links`

In the links object, you will find four more object keys, which will be used according to pagination,

  ~~~json
  "links": {
      "first": "https://example.com/api/categories?limit=5&pagination=342234&page=1",
      "last": "https://example.com/api/categories?limit=5&pagination=342234&page=2",
      "prev": null,
      "next": "https://example.com/api/categories?limit=5&pagination=342234&page=2"
  }
  ~~~

  | Name          | Info                                                                                                                |
  | ------------- |:-------------------------------------------------------------------------------------------------------------------:|
  | first         | Display the first url link of the called API with filter variable.                                                  |
  | last          | Display the last url link of the called API with filter variable.                                                   |
  | prev          | Display the previous url of the current called API url.                                                             |
  | next          | Display the next url of the current called API url. If no next url available then it will contain the `null` value. |

#### 3. Meta Object `meta`

`meta` object will only used with pagination. Under meta object, you will find seven object keys,

  ~~~json
  "meta": {
      "current_page": 1,
      "from": 1,
      "last_page": 2,
      "path": "https://example.com/api/categories",
      "per_page": "5",
      "to": 5,
      "total": 10
  }
  ~~~

  | Name          | Info                                                                                               | 
  | :------------ |:-------------------------------------------------------------------------------------------------- |
  | current_page  | Display the current page number.                                                                   |
  | from          | Display the first count of the returned data object based on the provided page and limit filters.  |
  | last_page     | Display the last page number.                                                                      |
  | path          | Display the current api url without input parameters.                                              |
  | per_page      | Display the total of records in a single page.                                                     |
  | to            | Display the last count of the returned data object based on the provided page and limit filters.   |
  | total         | Display the total number of records in the store.                                                  |

## Get all categories without pagination

If you don't want to use the pagination and want to access all the store's categories at once, then you have to send a filter parameter named as`pagination` with value `zero`. By doing this you will get all categories objects at once in the data object and this will not give you link and meta objects.

  - Request

    `GET <host>/api/categories?pagination=0`

  - Params

    | Name          | Info                                         | Type   |
    | ------------- |:--------------------------------------------:| ------ |
    | pagination    | will display all the records if set to `0`   | Number |

  ::: details Response

  ~~~json
  {
    "data": [
          {
              "id": 10,
              "code": null,
              "name": "Lights",
              "slug": "lights",
              "display_mode": "products_only",
              "description": "",
              "meta_title": "",
              "meta_description": "",
              "meta_keywords": "",
              "status": 1,
              "image_url": null,
              "additional": null,
              "created_at": "2020-09-24T11:44:42.000000Z",
              "updated_at": "2020-09-24T11:44:42.000000Z"
          },
          {...},
          {...},
          {...},
          {...},
          {...},
          {...},
          {...},
          {...},
          {...}
      ]
  }
  ~~~

  :::


## Get specific category

For fetching any specific category, you have to provide the category's id as an input parameter.

  - Request

    `GET <host>/api/categories/{category-id}`

  - Params

    | Name          | Info               | Type   |
    | ------------- |:------------------:| ------ |
    | category-id   | id of the category | Number |

  ### Examples

  #### 1. Let's try to fetch category by id

  - Request

    `GET <host>/api/categories/6`

  ::: details Response

  ~~~json
  {
      "data": {
          "id": 6,
          "code": null,
          "name": "Kitchen Appliances",
          "slug": "kitchen-appliances",
          "display_mode": "products_only",
          "description": "",
          "meta_title": "",
          "meta_description": "",
          "meta_keywords": "",
          "status": 1,
          "image_url": null,
          "additional": null,
          "created_at": "2020-09-24T11:42:17.000000Z",
          "updated_at": "2020-09-24T11:42:17.000000Z"
      }
  }
  ~~~

  :::

## Get descendant categories of specific category

This api request will fetch all the descendant categories based on the `parent_id`.

  - Request

    `GET <host>/api/descendant-categories(?parent_id)`

  - Params

    | Name          | Info                                 | Type   |
    | ------------- |:------------------------------------:| ------ |
    | parent_id     | parent id of the descendant category | Number |

### Examples

#### 1. Get data based on the `parent_id` which have descendant categories,

  - Request

    `GET <host>/api/descendant-categories?parent_id=2`

  ::: details Response

  ~~~json
  {
    "data": [
          {
              "id": 3,
              "code": null,
              "name": "Bike Accessories",
              "slug": "bike-accessories",
              "display_mode": "products_only",
              "description": "",
              "meta_title": "",
              "meta_description": "",
              "meta_keywords": "",
              "status": 1,
              "image_url": null,
              "additional": null,
              "created_at": "2020-09-22T07:16:32.000000Z",
              "updated_at": "2020-09-24T13:08:21.000000Z"
          },
          {
              "id": 11,
              "code": null,
              "name": "Bike Tyres",
              "slug": "bike-tyres",
              "display_mode": "products_only",
              "description": "",
              "meta_title": "",
              "meta_description": "",
              "meta_keywords": "",
              "status": 1,
              "image_url": null,
              "additional": null,
              "created_at": "2020-09-24T13:20:01.000000Z",
              "updated_at": "2020-09-24T13:20:01.000000Z"
          }
      ]
  }
  ~~~

  :::

#### 2. Let's try with `parent_id` which have no descendant categories,

  - Request

    `GET <host>/api/descendant-categories?parent_id=3`

  ::: details Response

  ~~~json
  {
      "data": []
  }
  ~~~

  :::
