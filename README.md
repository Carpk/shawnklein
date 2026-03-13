# shawnklein.net

Personal portfolio site for Shawn Klein — Systems & DevOps Engineer.

## Local Development

Writing posts use `fetch()` to load `.md` files, so the site must be served over HTTP (not opened as a local file).

```bash
npx serve .
```

Then open `http://localhost:3000`.

## Adding a Writing Post

1. Create a new `.md` file in `writing/`
2. Add a post card in `index.html` with a matching `data-src`:

```html
<a href="#" class="post-card" data-src="writing/your-post.md">
  <div class="post-tag">Tag · Tag</div>
  <div class="post-title">Your Post Title</div>
</a>
```
