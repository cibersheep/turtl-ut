Turtl UT is made from source from official github:

Encrypt, sync and share notes, pictures, etc. Online and offline
Take notes, bookmark websites, and store documents for sensitive projects.

Unofficial build from official repositories.

What is Turtl?
It's a private place to keep your notes, research, passwords, bookmarks, dream logs, photos, documents and anything else you want kept safe. Turtl's easy tagging and filtering make it ideal for organization and research whether for personal or professional projects.

It does work:
- Offline mode
- Autologin
- Access to content hub and camera

It does not work:
- Dowloading picures to device (Turtl)
- Locale translation (bad configuration?). The app come with some languages (Catalan, German, French, Hungarian, Polish and Ukrainian) but they don't load.

Known issues:
- If you're offline and leave the app in the background it will go blank.
- Making a picture bigger than 1.5MB(?) might be two much and webwiew restarts or goes blank.

Build from source:
https://github.com/turtl
License: GNU GPLv3
+changes I made: coverted .woff fonts into .otf (click builder was complaining about them) and changed refrences in the css. The rest of the code is untouched.

Also, using html5 template from Alan Pope (thanks again!)
https://github.com/popey/ubuntu-html5-template
License: MIT


Usage
Put your HTML5 app in www/
Modify the app.desktop, and manifest.json to set your app name, version, etc.

Options for building:

- Open "app.ubuntuhtmlproject" using the Ubuntu SDK or

- Build on the command line with "click build ."

