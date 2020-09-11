# circular-text
Web component to display text along a circle shape

![Circular text example](circle.png)

## How to use

If you are already using npm in your project:
```
npm add @webpunk/circular-text
```

Otherwise, include it from the CDN:
```
<script
    type="module"
    src="https://unpkg.com/@webpunk/circular-text">
</script>
```

Then you'll be able to use it like:
```
<circular-text
    text="FREE SHIPPING · FREE SHIPPING · "
    radius="90">
</circular-text>
```

Where the text argument receives the string to be displayed in the circle shape and radius determines the size of the circle.