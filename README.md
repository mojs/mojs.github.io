# mojs.github.io
Website for mo · js with tutorials and documentation.

![mo · js](logo.png "mo · js")

## To get started
* Install VuePress globally using `npm i -g vuepress`
* Run `npm i` to install all dependencies
* Run `npm start` to start the project on `http://localhost:8080`

## Deploy
* Run `npm run build`
* Push to the mojs.github.io master branch using `. deploy.sh`

## Tips for docs writers
If you need very special demo that doesn't work with the `<MojsCode>`or the `MojsInteractive` components, create a new component and add it to the folder "components". Make shure the name doen't contain a number, VuePress doesn't like that.