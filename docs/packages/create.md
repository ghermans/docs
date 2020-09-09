# Create a new package

## Prepare your package folder.

-  Inside **packages** folder, create a folder with your company name or namespace and inside it create a folder with your package name.
  e.g., here namespace is specified as ACME

> `packages/ACME/HelloWorld`

- Inside your package create a file named **_package.json_** and a folder named **src**, we will use it later.

## Create your service provider

- Inside **src** folder create a folder named as **Providers** and under it create a file named as **_PackagenameServiceProvider.php_**.

  Ex – HelloWorldServiceProvider.php

  The Service Provider consists of two methods.
    - [Boot Method](https://laravel.com/docs/7.x/providers#the-boot-method)
    - [Register Method](https://laravel.com/docs/7.x/providers#the-register-method)

```php
     namespace ACME\HelloWorld\Providers;

     use Illuminate\Support\ServiceProvider;

     /**
     * HelloWorld service provider
     *
     * @author    Jane Doe <janedoe@gmail.com>
     * @copyright 2018 Webkul Software Pvt Ltd (http://www.webkul.com)
     */
    class HelloWorldServiceProvider extends ServiceProvider
    {
        /**
        * Bootstrap services.
        *
        * @return void
        */
        public function boot()
        {

        }

        /**
        * Register services.
        *
        * @return void
        */
        public function register()
        {

        }
    }
```

## Step-4

- Now, to register the service provider, go to the **_app.php_** file inside the **config** folder & add your service provider inside the ‘providers’ array.

    ```php
        ACME\HelloWorld\Providers\HelloWorldServiceProvider::class,
    ```

<!-- ![provider-registration](assets/images/Bagisto_Docs_Images/PackageDevelopment/provider-registration.png){: .screenshot-dimension .center} -->

## Step-5

- Now, we need to add our package to the **_composer.json_** file of project root for autoloading in psr-4.

    ```php
            "ACME\\HelloWorld\\": "packages/ACME/HelloWorld/src"
    ```

  <!-- ![psr4](assets/images/Bagisto_Docs_Images/PackageDevelopment/psr4-registration.png){: .screenshot-dimension .center} -->

## Step-6

- Now, we are going to add routing & views in our package.

  1.  For routes: create an **Http** folder inside **src** folder of your package & inside **Http** create a file name as **_routes.php_** like `YourPackage/src/Http/routes.php`. In this file, we can create routes for the package.

  Now, we need to register our route file to service provider’s boot method i.e. **_HelloWorldServiceProvider.php_**

```php
        <?php

        namespace ACME\HelloWorld\Providers;

        use Illuminate\Support\ServiceProvider;

        /**
        * HelloWorld service provider
        *
        * @copyright 2018 Webkul Software Pvt Ltd (http://www.webkul.com)
        */
        class HelloWorldServiceProvider extends ServiceProvider
        {
            /**
            * Bootstrap services.
            *
            * @return void
            */
            public function boot()
            {
                include __DIR__ . '/../Http/routes.php';
            }

            /**
            * Register services.
            *
            * @return void
            */
            public function register()
            {

            }
        }
```