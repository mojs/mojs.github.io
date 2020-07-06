[# mojs.github.io](mojs.github.io/)
Website for mo · js with tutorials and documentation.

![mo · js](logo.png "mo · js")

## To get started
* Run `npm i` to install all dependencies
* Run `npm start` to start the project on `http://localhost:8080`

## Deploy
* Run `npm run build`
* Try the build using `npx serve docs/.vuepress/dist`
* Push to the mojs.github.io master branch using `. deploy.sh`

## Tips for docs writers
If you need very special demo that doesn't work with the `<MojsCode>`or the `MojsInteractive` components, create a new component and add it to the folder "components". Make shure the name doen't contain a number, VuePress doesn't like that.

### Known bugs
* If you get a `Unknown custom element:` or any other wierd errors, try restarting VuePress by stopping the process in tour terminal and run `npm run start` again to clear the VuePress cache. It's probably due to some JS error in a custom component that you used wrote.

* If you get an `Errors compiling template: tag <p> has no matching end tag.`, make sure you have a dubble line break before any html comments (`<!--`). Like this:

  ```md
  My code

  <!-- Some html comment -->
  ```
