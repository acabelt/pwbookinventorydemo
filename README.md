# PWBOOKINVENTORY - Playground

## About this repo

It's a full working copy of the project. In case you want to install it, use DDEV (this is a DDEV project), Laragon, or whatever you prefer. You have to fix the _/site/config.php_ based on your setup. Copy the files over and import the latest or matching database backup. It should work right away.

### User Credentials

- username: admin
- password: adminadmin

![Noice!](./noice.webp)

- **THIS IS NOT A PROFILE!**
- **THIS IS NOT AN EXPORTED INSTALLER!**

_Go on..._

## What's installed so far?

- ProcessWire 3.0.241
- ImportPagesCSV module
- TemplateFactory + Twig module (yeah, I love it!)
- RockFrontend module (Love that, too!)
- Autocomplete Module Class Name (you can guess it!)
- Database Backups (We will need this, right?)

### Additional packages

- Tailwind CSS
- Alpine JS
- HTMX
- HTMX

Run `npm install` to install the additional packages. Look into the _package.json_ file to see what exactly is installed.
`npm run watch` does what it always does and updates whenever you change a file. `npm run build` will create the production version of the files.

### What else?

- Cursor files:
  - .cursorignore
  - .cursorrules

Are included already. In addition to that there is a .editorconfig file present, in case you need that.

Yeah... so... have fun!

## Why?

I created this ProcessWire project as a _response_ or fun project to Lee Robinson's tweet about handling large datasets in web applications. My goal was to address the challenges he presented using Next.js, but with ProcessWire's powerful features instead. However this will work out at the end, it should and will be fun. I know this already.

**Based on:**

- https://processwire.com/talk/topic/30310-wouldnt-this-be-a-great-demochallenge-for-processwire/
- https://x.com/leeerob/status/1822668486214140134
- https://github.com/vercel-labs/book-inventory

## Steps so far

- custom import script to import data from the CSV file as the ImportPagesCSV module didn't do it
  - base version: ./import_book_titles.php
    - in DDEV you have to run `ddev ssh` and run it from there
