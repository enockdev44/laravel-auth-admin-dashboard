step 1: install mysql server, mysql client and php8
step 2: install composer and nodejs (npm and npx)
step 3: install laravel
step 4: create a new laravel project using comandline tool of laravel, when a prompt is open, go to next step
step 5: on step 4, select option "Reactjs" and select option "Laravel's built-in authentication"
step 6: it is better to make it on step 5 by selecting option automatically: npm install and npm run dev
step 7: run your mysql server and create a new database with mysql client
step 8: create the file .env in the root project if this file does not exist for the environment variable and put there your mysql configuration like username, password, database and host
step 9: execute migration on laravel: php artisan migrate
step 10: now, you could run you app with: composer run dev
step 11: open 127.0.0.1:8000 on you browser and enjoy the app
