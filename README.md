# easymirror-frontend
Source code to EasyMirror's frontend.

## Building
### Dev
1) Run the [bash file](/build/dev_build.sh) found in [build directory](/build/). This ensures the `.env` file is also passed in.
2) For a manual build, run: `$ docker build -t easymirror-platform-frontend:latest .`

### Production
1) Run the [build bash file](/build/prod_build.sh) found in [build directory](/build/). This ensures the `.env` file is also passed in.
2) For a manual build, run: `$ docker build --file Dockerfile.prod -t easymirror-platform-frontend:latest .`

## File structure
- The file structure was inspired by this [WebDevSimplified article](https://blog.webdevsimplified.com/2022-07/react-folder-structure/).

Folder  | Description | Example
------------- | ------------- | -------------
`src/assets ` | Contains everything that isn’t code related | images, css files, font files, etc
`src/components `  | Contains subfolder(s) of general components that are used throughout the app | Checkbox Component
`src/layouts `  | Folder for placing any layout based components | Navbar, Sidebar, etc
`src/lib`  | Contains wrappers for the various different libraries you use in your project | Wrapping for `fetch()` calls
`src/pages `  | Contains all pages, one file for each | A home page file
`src/services `  | Contains all your code for interfacing with any external API. | File for collecting fingerprint data
`src/utils `  | Contains all utility functions. | Formatters like converting string to type Date

## TODOS
- [x] The client (Front end) will store refresh token in an httponly cookie and access token in local storage.
- [x] Display mirror link after successfully uploading file
- [x] Fix Modal background color
- [x] Display page for mirror host links
- [ ] Functionality to delete history
- [ ] Easier to way get domain name for dev/prod