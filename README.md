# Test Blog
## INTRODUCTION
This is a simple blog project created using Laravel Php and React Js interfaced using InertiaJs

## RUNNING THE PROJECT
### REQUIREMENTS
1. Laravel Php V9.x
2. Nodejs and npm
3. MySql

### SETUP
1. Create a database (default is test_blog)
2. Create `.env` file from `.env.example`
```bash
cp .env.example .env
```
3. Generate an app key
```bash
php artisan key:generate
```
4. Input your database credentials.

5. Run migrations
```bash
php artisan migrate
```
6. Optionally seed the posts table
```bash
php artisan db:seed
```
### BUILDING
1. Install dependencies
```bash
npm install
```
2. Startup `Laravel` server
```bash
php artisan serve
```
3. Compile Front-End. laravel-mix helps us compile our templates and styles so we don't need to complie them.
```bash
npm run watch
```
note: for development purposes you can uncomment browsersync in webpack.mix.js
```
// mix.browserSync('127.0.0.1:8000');
```
This will enable live reload and help you develop faster however if you're only going to use the blog leave it commented, the new port will clash with laravel generated routes.
