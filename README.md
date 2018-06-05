# IMPORTANT
Project moved to [gitlab](https://gitlab.com/cibersheep/turtl-ut/)
Install last version on Ubuntu Touch Mobile from https://open-store.io/app/turtl-ut.cibersheep

Github project is deprecated

# Turtl UT is a Tutl client for Ubuntu Touch

Turtl UT is build from official Turtl github source code:

Encrypt, sync and share notes, pictures, etc. Online and offline
Take notes, bookmark websites, and store documents for sensitive projects.

Unofficial build from official repositories.

## What is Turtl?
It's a private place to keep your notes, research, passwords, bookmarks, dream logs, photos, documents and anything else you want kept safe. Turtl's easy tagging and filtering make it ideal for organization and research whether for personal or professional projects.

## Version Notes
It does work (v0.6 based on Turtl v0.6.4):
- Offline mode
- Autologin
- Access to content hub and camera
- Locale translation. The app is translated to Catalan, German, French, Hungarian, Polish, Spanish and Ukrainian.

It does not work:
- Dowloading picures to device (Turtl)

Known issues:
- If you're offline and leave the app in the background it will go blank.
- Making a picture bigger than 1.5MB(?) might be two much and webwiew restarts or goes blank.

## Other Notes
Build from source:
https://github.com/turtl
License: GNU GPLv3

Changes made: 
- coverted .woff fonts into .otf (click builder was complaining about them) and changed refrences in the css.
- Updated handlebars to v4.0.11 (security update)
The rest of the code is untouched.

Also, using html5 template from Alan Pope (thanks again!)
https://github.com/popey/ubuntu-html5-template
License: MIT

Usage
Put your HTML5 app in www/
Modify the app.desktop, and manifest.json to set your app name, version, etc.

Options for building:

- Build from the command line with "click build ." or "clickable"

