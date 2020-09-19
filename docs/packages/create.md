# Create a new package

There are two ways to create a package.

1. By using Bagisto Package Generator (**Recommended**)
2. By manually setting up all files (**Expert Level**)

## 1. By using Bagisto Package Generator

- You need to install [Bagisto Package Generator](https://github.com/bagisto/bagisto-package-generator).

- If you have not installed this package then you need to go to the root folder of **Bagisto** and run the following command

  ~~~php
  composer require bagisto/bagisto-package-generator
  ~~~

- Now, to generate your package you need to use the following command,

  - If package directory not present,

    ~~~php
    php artisan package:make ACME/HelloWorld
    ~~~

  - If somehow package directory already present then you can use force command as well. For that you just need to pass the '**--force**' command.

    ~~~php
    php artisan package:make ACME/HelloWorld --force
    ~~~

- Now check your `packages` directory, everything is setup for you.

- After that, you need to register your service provider in `config/app.php`.

  ~~~php
  <?php

  return [
      ...
      'providers' => [
          ...
          ACME\HelloWorld\Providers\HelloWorldServiceProvider::class,
          ...
      ]
      ...
  ];
  ~~~

- Add you package namespace in `psr-4` key in `composer.json` file for auto loading.

  ~~~json
  "autoload": {
      ...
      "psr-4": {
          ...
          "ACME\\HelloWorld\\": "packages/ACME/HelloWorld/src"
          ...
      }
      ...
  }
  ~~~

- Run `composer dump-autoload`.

- Check output in the browser.

  ![helloworld-admin-browser-output](../assets/images/package-development/hello-world-package-output.png)

- Now start creating something cool.

## 2. By manually setting up all files

By manually setting up package, we assume that you are familiar with packages directory structures and flow. If not then you can find a basic tree structure of package below,

  ~~~file-structure
  - ACME/HelloWorld/
    - publishable/assets
      - css/
      - images/
      - js/
    - src/
      - Config/
        - acl.php
        - admin-menu.php
      - Console/
        - Commands/
      - Contracts/
      - Database/
        - Migrations/
        - Seeders/
      - Events/
      - Http/
        - Controllers/
          - Admin/
            - HelloWorldController.php
          - Shop/
            - HelloWorldController.php
        - Middleware/
        - Requests/
        - admin-routes.php
        - shop-routes.php
      - Listeners/
      - Mail/
      - Models/
      - Providers/
        - HelloWorldServiceProvider.php
        - ModuleServiceProvider.php
      - Repositories/
      - Resources/
        - assets/
          - images/
          - js/
            - app.js
          - sass/
            - admin.scss
            - default.scss
            - velocity.scss
        - lang/
        - views/
          - admin/
            - layouts/
              - style.blade.php
            - index.blade.php
          - shop/
            - default/
              - index.blade.php
            - velocity/
              - index.blade.php
    - package.json
    - webpack.mix.js
  ~~~

Let's start with first step by creating the packages folder.

### Step-1

- In `packages` folder, create a folder with your company name and inside that create a folder with your package name. Let's say `ACME/HelloWorld`. So, your basic structure will look like this,

  ~~~file-structure
  - packages/
    - ACME/HelloWorld/
  ~~~

### Step-2

- In your package folder, create a folder named as `src`. This is the place where you need to put all your files related to your package. Now, your updated structure will look like this,

  ~~~file-structure
  - packages/
    - ACME/HelloWorld/
      - src/
  ~~~

### Step-3

- In `src` folder, create a folder named as `Providers` and inside that folder, create a file named as `PackagenameServiceProvider.php`. Let's say `HelloWorldServiceProvider.php`.

    ::: tip
    If you want to do with **Bagisto Package Generator** then you need to type this command, this command will generate service provider for you.

    ~~~php
    php artisan package:make-provider HelloWorldServiceProvider ACME/HelloWorld
    ~~~

    If somehow file already present then you can use `--force` to overwrite the file.
    :::

- Copy the below code and paste it in `HelloWorldServiceProvider.php`,

  ~~~php
  <?php
  namespace ACME\HelloWorld\Providers;

  use Illuminate\Support\ServiceProvider;

  /**
  * HelloWorldServiceProvider
  *
  * @copyright 2020 Webkul Software Pvt. Ltd. (http://www.webkul.com)
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
  ~~~

### Step-4

- Now, register your service provider in `config/app.php`.

  ~~~php
  <?php

  return [
      ...
      'providers' => [
          ...
          ACME\HelloWorld\Providers\HelloWorldServiceProvider::class,
          ...
      ]
      ...
  ];
  ~~~

### Step-5

- Add you package namespace in `psr-4` key in `composer.json` file for auto loading.

  ~~~json
  "autoload": {
      ...
      "psr-4": {
          ...
          "ACME\\HelloWorld\\": "packages/ACME/HelloWorld/src"
          ...
      }
      ...
  }
  ~~~

### Step-6

- Now, we are going to add routing & views in our package.

  - **For routes**: Create `Http` folder in `packages/ACME/HelloWorld/src` path and create two files named as `admin-routes.php` and `shop-routes.php`. So updated structure will look like this,

    ~~~php
    - packages/
      - ACME/HelloWorld/
        - src/
          ...
          - Http/
            - admin-routes.php
            - shop-routes.php
    ~~~
  
    - `admin-routes.php`: This file is for the admin routes. Add below codes to this file,

        ~~~php
        <?php

        Route::group(['middleware' => ['web', 'admin']], function () {

            // all admin routes will place here

        });
        ~~~

    - `shop-routes.php`: This file is for the shop routes. Add below codes to this file,

        ~~~php
        <?php

        Route::group(['middleware' => ['web', 'theme', 'locale', 'currency']], function () {

            // all shop routes will be place here

        });
        ~~~

    ::: tip

    - If you don't want to do it manually, then you can use our **Bagisto Package Generator**. For that you need to use this command,

      - For **admin-routes.php**,

        ~~~php
        php artisan package:make-admin-route ACME/HelloWorld
        ~~~

      - For **shop-routes.php**,

        ~~~php
        php artisan package:make-shop-route ACME/HelloWorld
        ~~~

    :::

  - **For views**: Create `Resources` folder in `packages/ACME/HelloWorld/src` path. In `Resources` folder create a folder name as `views`. Now, in the `views` folder, we need to create a two more folder i.e. `admin` and `shop`. So updated structure will look like this,

    ~~~php
    - packages/
      - ACME/HelloWorld/
        - src/
          ...
          - Resources/
            - assets/
            - lang/
            - views/
              - admin/
              - shop/
    ~~~

    - Inside each folder i.e. `admin` and `shop` create a file named as `index.blade.php`. Add some data to `index.blade.php`,

      - `admin/index.blade.php`

        ~~~php
        <h2>Hello World Admin</h2>
        ~~~

      - `shop/index.blade.php`

        ~~~php
        <h2>Hello World Shop</h2>
        ~~~

- Now, we need to register our routes and views to service provider’s boot method i.e. `packages/ACME/HelloWorld/src/Providers/HelloWorldServiceProvider.php`

  ~~~php
  <?php

  namespace ACME\HelloWorld\Providers;

  use Illuminate\Support\ServiceProvider;

  /**
  * HelloWorldServiceProvider
  *
  * @copyright 2020 Webkul Software Pvt. Ltd. (http://www.webkul.com)
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
          $this->loadRoutesFrom(__DIR__ . '/../Http/admin-routes.php');

          $this->loadRoutesFrom(__DIR__ . '/../Http/shop-routes.php');

          $this->loadViewsFrom(__DIR__ . '/../Resources/views', 'helloworld');
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
  ~~~

### Step-7

- Now, we need to create a route and render a view on that route.

- Go to `packages/ACME/HelloWorld/src/Http/shop-routes.php` file and create a route to render view.

  ~~~php
  <?php

  Route::group(['middleware' => ['web', 'theme', 'locale', 'currency']], function () {

      // all shop routes will be place here
      Route::view('/hello-world', 'helloworld::shop.index');

  });
  ~~~

- Same for admin routes in file `packages/ACME/HelloWorld/src/Http/admin-routes.php`.

  ~~~php
  <?php

  Route::group(['middleware' => ['web', 'admin']], function () {

      // all admin routes will place here
      Route::view('/admin/hello-world', 'helloworld::admin.index');

  });
  ~~~

- Now, check your route in your browser,

  - **__Admin Output__**

    ![helloworld-admin-browser-output](../assets/images/package-development/helloworld-admin-browser-output.png)

  - **__Shop Output__**
  
    ![helloworld-shop-browser-output](../assets/images/package-development/helloworld-shop-browser-output.png)

### Step-8

- Now, we are going to create a language file for our package. For this create a `lang` folder in the `packages/ACME/HelloWorld/src/Resources` path.

- In `lang` folder, you can create a different folder for language translations like for English 'en', Hindi ‘hn’ etc. Moving forward, we will create a folder name **en** (say language code) and inside **en** folder, create a file name as `app.php` to perform language translation.

- Now, we need to register the language file to the service provider.

  ~~~php
  <?php

  namespace ACME\HelloWorld\Providers;

  use Illuminate\Support\ServiceProvider;

  /**
  * HelloWorldServiceProvider
  *
  * @copyright 2020 Webkul Software Pvt. Ltd. (http://www.webkul.com)
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
          $this->loadRoutesFrom(__DIR__ . '/../Http/admin-routes.php');

          $this->loadRoutesFrom(__DIR__ . '/../Http/shop-routes.php');

          $this->loadViewsFrom(__DIR__ . '/../Resources/views', 'helloworld');

          $this->loadTranslationsFrom(__DIR__ . '/../Resources/lang', 'helloworld');
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
  ~~~

- Now we can write a translation in `app.php` like below,

  ~~~php
  <?php

  return [
      'hello-world' => [
          'name' => 'Prateek Srivastava'
      ]
  ];
  ~~~

- Add below code to your blade file.

  ~~~html
  {{ __('helloworld::app.hello-world.name') }}
  ~~~

  - **__Admin Output__**

    ![Translation Output](../assets/images/package-development/hello-world-admin-translation-output.png)

  - **__Shop Output__**

    ![Translation Output](../assets/images/package-development/hello-world-shop-translation-output.png)

### Step-9

- Now we will add CSS, JS and images to our package.

- In `Resources` folder creates a folder name `assets` & create `sass`, `js` and `images` folder.

  - In **sass** folder, add file **_app.scss_**
  
  - In **js** folder, add file **app.js**

- Final structure will look like this,

  ~~~php
  - packages/
      - ACME/HelloWorld/
        - src/
          ...
          - Resources/
            - assets/
              - sass/
                - app.scss
              - js/
                - app.js
              - images/
  ~~~

- To add assets, create `package.json` and `webpack.mix.js` file inside the root of your package i.e. `packages/ACME/HelloWorld`.

- Copy below code to `package.json`,

  ~~~json
  {
      "scripts": {
          "dev": "npm run development",
          "development": "cross-env NODE_ENV=development node_modules/webpack/bin/webpack.js --progress --hide-modules --config=node_modules/laravel-mix/setup/webpack.config.js",
          "watch": "cross-env NODE_ENV=development node_modules/webpack/bin/webpack.js --watch --progress --hide-modules --config=node_modules/laravel-mix/setup/webpack.config.js",
          "watch-poll": "npm run watch -- --watch-poll",
          "hot": "cross-env NODE_ENV=development node_modules/webpack-dev-server/bin/webpack-dev-server.js --inline --hot --config=node_modules/laravel-mix/setup/webpack.config.js",
          "prod": "npm run production",
          "production": "cross-env NODE_ENV=production node_modules/webpack/bin/webpack.js --no-progress --hide-modules --config=node_modules/laravel-mix/setup/webpack.config.js"
      },

      "devDependencies": {
          "cross-env": "^7.0.2",
          "laravel-mix": "^5.0.1",
          "laravel-mix-merge-manifest": "^0.1.2"
      }
  }
  ~~~

- Copy below code to `webpack.mix.js`,

  ~~~javascript
  const mix = require("laravel-mix");

  if (mix == "undefined") {
      const { mix } = require("laravel-mix");
  }

  require("laravel-mix-merge-manifest");

  if (mix.inProduction()) {
      var publicPath = "publishable/assets";
  } else {
      var publicPath = "../../../public/vendor/webkul/helloworld/assets";
  }

  mix.setPublicPath(publicPath).mergeManifest();

  mix.disableNotifications();

  mix.js([__dirname + "/src/Resources/assets/js/app.js"], "js/helloworld.js")
      .copyDirectory(
          __dirname + "/src/Resources/assets/images",
          publicPath + "/images"
      )
      .sass(
          __dirname + "/src/Resources/assets/sass/app.scss",
          "css/helloworld.css"
      )
      .options({
          processCssUrls: false
      });

  if (mix.inProduction()) {
      mix.version();
  }
  ~~~

- After doing this go to the root of your package i.e. `packages/ACME/HelloWorld` and run `npm install` which will install all dependencies.

- Run `npm run prod` which will compiled all your css, js and images to the publishable folder. Then register your publishable in `HelloWorldServiceProvider`,

  ~~~php
  <?php

  namespace ACME\HelloWorld\Providers;

  use Illuminate\Support\ServiceProvider;

  /**
  * HelloWorldServiceProvider
  *
  * @copyright 2020 Webkul Software Pvt. Ltd. (http://www.webkul.com)
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
          $this->loadRoutesFrom(__DIR__ . '/../Http/admin-routes.php');

          $this->loadRoutesFrom(__DIR__ . '/../Http/shop-routes.php');

          $this->loadViewsFrom(__DIR__ . '/../Resources/views', 'helloworld');

          $this->loadTranslationsFrom(__DIR__ . '/../Resources/lang', 'helloworld');

          $this->publishes([
              __DIR__ . '/../../publishable/assets' => public_path('vendor/webkul/helloworld/assets'),
          ], 'public');
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
  ~~~

- After doing this we need to add an event listener so that admin layouts include our CSS. For this we need to add an Event Listener in service provider. But before adding event, let's create a `layouts` folder in `packages/ACME/Test/src/Resources/views/admin` and inside that create a file called `style.blade.php` & mention compiled CSS path inside this file.

    ~~~html
    <link rel="stylesheet" href="{{ asset('vendor/webkul/helloworld/assets/css/helloworld.css') }}">
    ~~~

- **For Event Listener:** Add facade 'Event' into your `HelloWorldServiceProvider.php` file,

  ~~~php
  <?php

  namespace ACME\HelloWorld\Providers;

  use Illuminate\Support\Facades\Event;
  use Illuminate\Support\ServiceProvider;

  /**
  * HelloWorldServiceProvider
  *
  * @copyright 2020 Webkul Software Pvt. Ltd. (http://www.webkul.com)
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
          $this->loadRoutesFrom(__DIR__ . '/../Http/admin-routes.php');

          $this->loadRoutesFrom(__DIR__ . '/../Http/shop-routes.php');

          $this->loadViewsFrom(__DIR__ . '/../Resources/views', 'helloworld');

          $this->loadTranslationsFrom(__DIR__ . '/../Resources/lang', 'helloworld');

          $this->publishes([
              __DIR__ . '/../../publishable/assets' => public_path('vendor/webkul/helloworld/assets'),
          ], 'public');

          Event::listen('bagisto.admin.layout.head', function($viewRenderEventManager) {
              $viewRenderEventManager->addTemplate('helloworld::helloworld.layouts.style');
          });
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
  ~~~

- Till now, we configured our package HelloWorld and now we need to extend the default layout of our admin panel by using `@extends('admin::layouts.master')` in file `packages/ACME/HelloWorld/src/Resources/views/admin/index.blade.php`. Below is the simple template which you can copy to your `index.blade.php` file,

  ~~~html
  @extends('admin::layouts.master')

  @section('page_title')
      Package HelloWorld
  @stop

  @section('content-wrapper')

      <div class="content full-page dashboard">
          <div class="page-header">
              <div class="page-title">
                  <h1>Package HelloWorld</h1>
              </div>

              <div class="page-action">
              </div>
          </div>

          <div class="page-content">
          </div>
      </div>

  @stop
  ~~~

- If you don’t want to include this one then you can create your own master file which includes your packages CSS & JS.

### Step-10

- Now we will add Database to our package. Create a `Database` folder in `packages/ACME/HelloWorld/src` path and inside `Database` folder create `Migrations` and `Seeders` folder.

- Now, we need to add migrations to our service provider to load them.

  ~~~php
  <?php

  namespace ACME\HelloWorld\Providers;

  use Illuminate\Support\Facades\Event;
  use Illuminate\Support\ServiceProvider;

  /**
  * HelloWorldServiceProvider
  *
  * @copyright 2020 Webkul Software Pvt. Ltd. (http://www.webkul.com)
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
          $this->loadRoutesFrom(__DIR__ . '/../Http/admin-routes.php');

          $this->loadRoutesFrom(__DIR__ . '/../Http/shop-routes.php');

          $this->loadViewsFrom(__DIR__ . '/../Resources/views', 'helloworld');

          $this->loadTranslationsFrom(__DIR__ . '/../Resources/lang', 'helloworld');

          $this->publishes([
              __DIR__ . '/../../publishable/assets' => public_path('vendor/webkul/helloworld/assets'),
          ], 'public');

          Event::listen('bagisto.admin.layout.head', function($viewRenderEventManager) {
              $viewRenderEventManager->addTemplate('helloworld::helloworld.layouts.style');
          });

          $this->loadMigrationsFrom(__DIR__ .'/../Database/Migrations');
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
  ~~~

## How to create Migrations?

You can create migration in two ways,

1. By using Bagisto Package Generator.
2. By normal laravel command and then manually copy to the respective folder.

### By using Bagisto Package Generator

This command will create a new migration class in 'packages/ACME/HelloWorld/src/Database/Migrations' directory.

`php artisan package:make-migration CreateUsersTable ACME/HelloWorld`

### By normal laravel command and then manually copy to the respective folder

To create a migration, use the 'make:migration Artisan command':

`php artisan make:migration create_users_table`

The new migration will be placed in your `database/migrations` directory. Each migration file name contains a timestamp which allows Laravel to determine the order of the migrations.

The --table and --create options may also be used to indicate the name of the table and whether the migration will be creating a new table.

You may also specify a --path option when creating the migration. The path should be relative to the root directory of your installation:

`php artisan make:migration create_demo_table --path=packages/ACME/HelloWorld/src/Database/Migrations`

## How to Add Menu in Admin?

- Within your package `packages/ACME/HelloWorld/src`, create **Config** folder and create a file named as `admin-menu.php`.

~~~php
<?php

  return [
      [
        'key'        => 'helloworld',
        'name'       => 'Hello World',
        'route'      => 'helloworld.admin.index',
        'sort'       => 1,
        'icon-class' => 'dashboard-icon',
      ]
  ];
~~~

- In this file, we provide the name of the menu, route & its icon.

| Params     | description                                        |
| -----------| -------------------------------------------------- |
| key        | uniquely defined key for menu-icon                 |
| name       | name of menu-icon                                  |
| route      | the route for your menu-icon                       |
| sort       | Sort number on which your menu-icon should display |
| icon-class | class of menu-icon                                 |

- For the route, just add the named route which specified above i.e. `helloworld.admin.index`,

  ~~~php
  Route::view('/admin/hello-world', 'helloworld::admin.index')->name('helloworld.admin.index');
  ~~~

- After that we need to merge this `menu.php` folder with a core menu file. For this, we use the method `mergeConfigFrom()` in the register method of the service provider.

  ~~~php
  <?php

  namespace ACME\HelloWorld\Providers;

  use Illuminate\Support\Facades\Event;
  use Illuminate\Support\ServiceProvider;

  /**
  * HelloWorldServiceProvider
  *
  * @copyright 2020 Webkul Software Pvt. Ltd. (http://www.webkul.com)
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
          $this->loadRoutesFrom(__DIR__ . '/../Http/admin-routes.php');

          $this->loadRoutesFrom(__DIR__ . '/../Http/shop-routes.php');

          $this->loadViewsFrom(__DIR__ . '/../Resources/views', 'helloworld');

          $this->loadTranslationsFrom(__DIR__ . '/../Resources/lang', 'helloworld');

          $this->publishes([
              __DIR__ . '/../../publishable/assets' => public_path('vendor/webkul/helloworld/assets'),
          ], 'public');

          Event::listen('bagisto.admin.layout.head', function($viewRenderEventManager) {
              $viewRenderEventManager->addTemplate('helloworld::helloworld.layouts.style');
          });

          $this->loadMigrationsFrom(__DIR__ .'/../Database/Migrations');
      }

      /**
      * Register services.
      *
      * @return void
      */
      public function register()
      {
          $this->mergeConfigFrom(
              dirname(__DIR__) . '/Config/admin-menu.php', 'menu.admin'
          );
      }
  }
  ~~~

- Now, menu will display in the admin panel. You can change the icon according to your needs.

## How to Create ACL in Bagisto?

In term to manage an eCommerce site becomes clumsy and ambiguous. Here, in Bagisto, it has been taken care of, Bagisto has provided a functionality **ACL** (Access Control List). Mainly, with ACL, admin has the power to disable the menu whatever not in use for admin.

### Creating an ACL file

There are some steps that the user has to follow to create ACL. The user has to create a file in the `packages/ACME/HelloWorld/src/Config` path named as `acl.php`,

~~~php
<?php

return [
    [
        'key' => 'helloworld',
        'name' => 'Hello World',
        'route' => 'helloworld.admin.index',
        'sort' => 2
    ]
];
~~~

- The array is created for an individual's menu with the parameters (key, name, route, sort). All we need is to define the menu which we want to include in ACL functionality.

## Custom Configuration < id="custom-configuration"></>

Creating a custom configuration ease the task for a developer or any non-developer person. It lets you option of enable/disable with the dropdown or any input _type_ attribute. Generally, in bagisto, you can find it in admin panel **Configuration menu**.

### Steps to create custom configuration

- To create a custom configuration for your application, you just need to create a `system.php` file under the `Config` folder of your package.

- Inside the file, you can include the code below,

    ~~~php
    <?php

    return [
        [
            'key' => 'helloworld',
            'name' => 'Hello World',
            'sort' => 1
        ], [
            'key' => 'helloworld.settings',
            'name' => 'Settings',
            'sort' => 1,
        ], [
            'key' => 'helloworld.settings.settings',
            'name' => 'Status',
            'sort' => 1,
            'fields' => [
                [
                    'name' => 'Enable/Disable',
                    'title' => 'Toggle',
                    'type' => 'boolean',
                    'channel_based' => true,
                    'locale_based' => false
                ]
            ]
        ]
    ];
    ~~~

#### Explanation for the keys

- **key**    : This key accept the unique value and nested with '.' (dot) operator.

- **name**   : This key accept the value as a placeholder of your configuration. Generally, in Bagisto, we consider writing it using translation.

- **sort**   : This key accept the sort position for the configuration menu.

- **fields** : This key accept the array for the value of the custom configuration.

## Creating Models <a id="create_models"></a>

### Create model by using Bagisto Package Generator

- This command will create a following files,
  - New model class in '**__packages/ACME/TestPackage/src/Models__**' directory.
  - New model proxy class in '**__packages/ACME/TestPackage/src/Models__**' directory.
  - New model contract in '**__packages/ACME/TestPackage/src/Contracts__**' directory.

  `php artisan package:make-model User ACME/HelloWorld`

### Create model by normal laravel commands

- Models typically live in the app directory, but you are free to place them anywhere that can be auto-loaded according to your **_composer.json_** file. All Eloquent models extend `Illuminate\Database\Eloquent\Model` class.

- The simple way to create a model is executing the command _make:model Artisan command_:

    `php artisan make:model User`

- After creating model, to generate database migration, you may append `--migration or -m option` artisan command as stated below,

    `php artisan make:model User --migration`
    `php artisan make:model User -m`

> **Note** : _For more details check_ <a href="https://laravel.com/docs/5.8/eloquent#defining-models" target="_blank" class="bagsito-link"> Laravel Models </a>

## What is Contracts, Repositories and Proxies? <a id="about"></a>

### Contracts

Laravel's Contracts are a set of interfaces that define the core services provided by the framework. For example, an `Illuminate\Contracts\Queue\Queue` contract defines the methods needed for queueing jobs, while the `Illuminate\Contracts\Mail\Mailer` contract defines the methods needed for sending an e-mail.

Each contract has a corresponding implementation provided by the framework. For example, Laravel provides a queue implementation with a variety of drivers, and a mailer implementation that is powered by SwiftMailer.

All of the Laravel contracts live in their own GitHub repository. This provides a quick reference point for all available contracts, as well as a single, decoupled package that may be utilized by package developers.

> **Note** : _For more details check_ <a href="https://laravel.com/docs/5.8/contracts" target="_blank" class="bagsito-link"> Laravel Contracts </a>

### Repositories

Generally, we wrote all of our application logic in the controller. There’s an alternative approach of development that abstracts some calls into PHP classes called Repositories. The idea is that we can decouple models from controllers and assign a readable name's to complicated queries.

This file defines our Repository class. Instances of this class have a model property that we tie to an Eloquent model. Once this is bound in the constructor we can call Eloquent methods like findOrFail, update or all from the class methods.

### Proxies

Proxies as their name state will drive you to the actual model class. The concept of model proxies has been introduced to override the functionality of the existing Model. It is a type of model inheritance without creating a new table in the database.

## Store data through Repository <a id="store-data-through-repository"></a>

Steps to store data through repository:

- Beginning with the creation of models, generally, models are created using command stated below.

    `php artisan make:model HelloWorld`

> Note: If you have created model by using **__Bagisto Package Generator__**, then you can skip the model proxy and contract creation step.

- Now, at the same location create a model proxy file as **_HelloWorldProxy.php_**. This Proxy class will extends ModelProxy. Also, you have to add `use Konekt\Concord\Proxies\ModelProxy;` like below stated

    ~~~php
    <?php

    namespace Acme\HelloWorld\Models;

    use Konekt\Concord\Proxies\ModelProxy;

    class DataFlowProfileProxy extends ModelProxy
    {

    }
    ~~~

- Now, make a folder named as **Contracts** and inside it create an interface file named as **_HelloWorld.php_**

- Now, let's create a Repository, by using this command if you have **__Bagisto Package Generator__**.

    `php artisan package:make-repository HelloWorldRepository ACME/HelloWorld`

- Or you can create manually also, make a **Repository** folder and inside it create a file **_HelloWorldRepository.php_** and write the model method for repository class and under the method return path of your contract class.

    ~~~php
    <?php
    namespace Acme\HelloWorld\Repositories;

    use Webkul\Core\Eloquent\Repository;

    class HelloWorldRepository extends Repository
    {
    /**
        * Specify Model class name
        *
        * @return mixed
        */
        function model()
        {
            return 'ACME\HelloWorld\Contracts\HelloWorld';
        }
    }
    ~~~

- After creating all the files stated above for our package, we have to create a provider as **_ModuleServiceProvider.php_** and register it in `config/concord.php`. Inside this file, models used within the package are registered. You may check below code

    ~~~php
    <?php

    namespace  Acme\HelloWorld\Providers;

    use Konekt\Concord\BaseModuleServiceProvider;

    class ModuleServiceProvider extends BaseModuleServiceProvider
    {
        protected $models = [
            \Acme\HelloWorld\Models\HelloWorld::class,
        ];
    }
    ~~~

- **Now**, Registering **_ModuleServiceProvider.php_** in `config/concord.php` file

    ~~~php
    <?php

    return [
        'modules' => [
            /**
            * Example:
            * VendorA\ModuleX\Providers\ModuleServiceProvider::class,
            * VendorB\ModuleY\Providers\ModuleServiceProvider::class
            *
            */

            \Acme\HelloWorld\Providers\ModuleServiceProvider::class
        ]
    ];
    ~~~