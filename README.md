# Lara Shop
Web Store based on **Laravel** *PHP FRAMEWORK*
## Get started
First you have to just clone the repository to your machine saying:
```BASH
git clone https://github.com/mrcat323/lara-shop
```
### Configuring
First generate a key:
```BASH
php artisan key:generate
```
### Database
Set up the **database**:
```BASH
cp .env.example .env
```
And change that DB details to yours, something like **DB_HOST**, **DB_DATABASE**, **DB_USERNAME**, **DB_PASSWORD**
### Dependencies
Then install all composer & NPM dependencies:
```BASH
composer install
npm install
```
Simply compile them *(just in case)*:
```BASH
npm run dev
```
### DBs
You need the database to work with project, and that's why type:
```BASH
php artisan migrate
```
### Usage
**Simply just run**:
```BASH
php artisan serve
```
and test that out.
### Contribution
You also can contribute. If you noticed a bug, or wanna fix the issue helping me to save time or wanna add something yours, your, useful idea, just let me know that.

Copyright by *Mr. CaT* :cat2: :cat:
