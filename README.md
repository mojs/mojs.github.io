# mojs.github.io – [![deploy](https://img.shields.io/github/actions/workflow/status/mojs/mojs.github.io/deploy-docs.yml)](https://github.com/mojs/mojs.github.io/actions/workflows/deploy-docs.yml)

Website for tutorials and documentation.

[![mo · js](logo.svg "mo · js")](https://mojs.github.io/)

## Get started
* Run `npm i` to install all dependencies
* Run `npm run dev` to run the project locally at `http://localhost:8080`, your browser will open the URL automatically

## Deploy
* Run `npm run build`
* Try the build locally using `npx serve docs/.vuepress/dist`
* Automatic deployment through Github Actions on the `main` branch

## Tips for docs writers
If you need very special demo that doesn't work with the `<MojsCode>` or the `MojsInteractive` components, create a new one and add it to the "components" folder. Make sure the name doesn't contain a number, VuePress doesn't like that.

### Known bugs
* If you get an `Unknown custom element` or any other weird errors, try restarting VuePress by stopping the process in your terminal, then run `npm run dev` again to clear the VuePress cache. It's probably due to some JS error in a custom component that you used to wrote.

* If you get an `Errors compiling template: tag <p> has no matching end tag.` error, make sure you have a double line break before any HTML comments (`<!--`), like this:

```md
My code

<!-- Some html comment -->
```

### Conversion guide
Guide to convert jsx pages from the old mojs website to markdown.

#### Use find and replace in the file:
- `<UniteLink link="(.+?)">(.+?)</UniteLink>` replace with `[$2]($1)`
- `<Cite>` replace with `> ` (make sure to remove the newline too)
- `</Cite>` replace with ``
- `<span className="highlight">(.+?)</span>` replace with "`$1`"
- `<div className="post__header">(.+?)</div>` replace with `# $1`
- `<ORXLine className="post__orx-line" />` replace with `<hr />`
- `https://github.com/legomushroom/mojs/blob/master/api/` replace with `/api/`
- `<Pen pen="(.+?)" height="(.+?)" />` and `<Pen pen="(.+?)" height="(.+?)"></Pen>` replace with
```html
<Codepen
  title="$1"
  pen="$1"
  user="sol0mka"
  height="$2"
/>
[Link to pen](https://codepen.io/sol0mka/pen/$1)
```
- `<Gif className="gif--50-width" src="(.+?)" />` replace with `<img src="/assets$1" alt="Example gif" />`
- `<CodeSample pen="(.+?)">` replace with `// pen $1 \n```js`
- `</CodeSample>` replace with "```"
- `<Pen (.+?)" height="500</Pen>` replace with `<pre><code>$1</code></pre>` code
- `<Pen (.+?)</Pen>` replace with `<pre><code>$1</code></pre>`

#### Convert to markdown
- Check that you don't have any HTML errors in your file.
- Use an online markdown converter (https://www.browserling.com/tools/html-to-markdown or http://domchristie.github.io/turndown/)
- Manually remove wrapping divs
- Manually see if there are anything like: ``[Burst](/tutorials/burst/)``, replace it with `[`Burst`](/tutorials/burst/)`
- Manually replace all code sample with <MojsDemo code=" the code " penSource="the codepen id" /> or MojsInteractive element

Happy coding with `mojs` :tada:
