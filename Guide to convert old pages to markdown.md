# Guide to convert jsx pages from the old mojs website to markdown

## Use find and replace in the file:
 - `UniteLink` replace with `a`
 - `a link` replace with `a href`
 - `Cite` replace with `blockquote`
 - `<span className="highlight">(.+?)<\/span>` replace with `<code>$1</code>`
 - `<div className="post__header">(.+?)<\/div>` replace with `<h1>$1</h1>`
 - `<ORXLine className="post__orx-line" />` replace with `<hr />`
 - `https://github.com/legomushroom/mojs/blob/master/api/` replace with `/api/`
 - `<Pen (.+?) />` replace with `<Pen $1></Pen>`
 - `<Gif className="gif--50-width" src="(.+?)" />` replace with `<img src="/assets$1" alt="Example gif" />`
 - `<CodeSample` replace with `<pre><code>`
 - `</CodeSample>` replace with `</code></pre>`
 - `<Pen (.+?)" height="500</Pen>` replace with `<pre><code>$1</code></pre>` code
 - `<Pen (.+?)</Pen>` replace with `<pre><code>$1</code></pre>`

## Convert to markdown
 - Se so you dont have any html errors in your file.
 - use an online markdown converter (https://www.browserling.com/tools/html-to-markdown or http://domchristie.github.io/turndown/)
 - Manually remove wrapping divs
 - Manually see if there are anything like: ``[Burst](/tutorials/burst/)``, replace it with `[`Burst`](/tutorials/burst/)`
 - Manually replace all codesample with <MojsDemo code=" the code " penSource="the codepen id" /> or MojsInteractive element