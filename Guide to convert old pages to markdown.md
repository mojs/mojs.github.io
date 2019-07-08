# Guide to convert jsx pages from the old mojs website to markdown
In VS Code, use Find and Replace ()

## Use find and replace in the file:
 - `<UniteLink link="(.+?)">(.+?)</UniteLink>` replace with `[$2]($1)`
 - `<Cite>` replace with `> ` (make sure to temove the newline too)
 - `</Cite>` replace with ``
 - `<span className="highlight">(.+?)</span>` replace with "`$1`"
 - `<div className="post__header">(.+?)</div>` replace with `# $1`
 - `<ORXLine className="post__orx-line" />` replace with `<hr />`
 - `https://github.com/legomushroom/mojs/blob/master/api/` replace with `/api/`
 - `<Pen pen="(.+?)" height="(.+?)" />` and `<Pen pen="(.+?)" height="(.+?)"></Pen>` replace with
 ```
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

## Convert to markdown
 - Se so you dont have any html errors in your file.
 - use an online markdown converter (https://www.browserling.com/tools/html-to-markdown or http://domchristie.github.io/turndown/)
 - Manually remove wrapping divs
 - Manually see if there are anything like: ``[Burst](/tutorials/burst/)``, replace it with `[`Burst`](/tutorials/burst/)`
 - Manually replace all codesample with <MojsDemo code=" the code " penSource="the codepen id" /> or MojsInteractive element