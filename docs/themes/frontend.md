# Create a new store theme

Please follow the steps mentioned below that how to create a custom theme in Bagisto.

- Go to your project’s root directory and check for **config** folder.  
Inside the **config** folder, you will find a file called **_themes.php_** like directory below:

        - app/
        - bin/
        - bootstrap/
        - config/
           - themes.php
        - database/
        - packages/Webkul

<!-- ![theme-file-location](assets/images/Bagisto_Docs_Images/theme/theme-file-location.png){: width="30%" height="50%" .center} -->

- Check contents of **_themes.php_** file, it holds all necessary information of creating a custom theme.

```php
<?php

return [
    'default' => 'default',

    'themes' => [
        'default' => [
            'views_path' => 'resources/themes/default/views',
            'assets_path' => 'public/themes/default/assets',
            'name' => 'Default'
        ],

        // 'bliss' => [
        //     'views_path' => 'resources/themes/bliss/views',
        //     'assets_path' => 'public/themes/bliss/assets',
        //     'name' => 'Bliss',
        //     'parent' => 'default'
        // ]
    ]
];
```
