[# mojs.github.io](mojs.github.io/)
Website for mo · js with tutorials and documentation.

![mo · js](logo.png "mo · js")

## Get started
* Run `npm i` to install all dependencies
* Run `npm run dev` to run the projet locally at `http://localhost:8080`, your browser will open the URL automatically

## Deploy
* Run `npm run build`
* Try the build locally using `npx serve docs/.vuepress/dist`
* Automatic deployment through Github Actions on the `master` branch

## Tips for docs writers
If you need very special demo that doesn't work with the `<MojsCode>` or the `MojsInteractive` components, create a new one and add it to the "components" folder. Make sure the name doesn't contain a number, VuePress doesn't like that.

### Known bugs
* If you get an `Unknown custom element` or any other weird errors, try restarting VuePress by stopping the process in your terminal, then run `npm run dev` again to clear the VuePress cache. It's probably due to some JS error in a custom component that you used to wrote.

* If you get an `Errors compiling template: tag <p> has no matching end tag.` error, make sure you have a double line break before any HTML comments (`<!--`), like this:

```md
My code

<!-- Some html comment -->
```

Happy coding with `mojs` :tada
