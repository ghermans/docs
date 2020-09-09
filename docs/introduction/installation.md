# Installation & Configuration <a id="installation"></a>:

1. Try our new GUI installer to install Bagisto:

    - [Download bagisto](https://bagisto.com/en/download/)
    - Extract the contents of zip and execute the project in browser:

      `http(s)://localhost/bagisto/public`

        or

      `http(s)://example.com/public`

2. Install Bagisto using command line:

    - Execute these commands below as in their order

    ```
      1. composer create-project bagisto/bagisto-standard
    ```

    - Now configure your database:

      If the command above was completed successfully, then you'll find the directory **bagisto** and all of its available code.

      Find file **_.env_** inside the  **bagisto** directory and set the environment variables listed below:

        - APP_URL
        - DB_CONNECTION
        - DB_HOST
        - DB_PORT
        - DB_DATABASE
        - DB_USERNAME
        - DB_PASSWORD

    - Although, mailer environment variables are also required to be set up as **Bagisto** requires emails to send to customers and admins for various built-in functionalities.

    ```
    2. php artisan migrate
    ```

    ```
    3. php artisan db:seed
    ```

    ```
    4. php artisan vendor:publish
      -> Press 0 and then press enter to publish all assets and
      configurations.
    ```

    ```
    5. php artisan storage:link
    ```

    ```
    6. composer dump-autoload
    ```

3. To execute Bagisto:

  - On server:

    ```
      Open the specified entry point in your hosts file in browser
      or make entry in hosts file if not done.
    ```

  - On local:

    ```
      php artisan serve
    ```

  - How to login as admin:

      `http(s)://example.com/admin/login`

         email: admin@example.com

         password: admin123

  - How to login as customer:

      You can directly register as a customer and then login.

      `http(s)://example.com/customer/register`