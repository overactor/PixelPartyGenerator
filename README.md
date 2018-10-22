# PixelPartyGenerator

[Pixel Party Generator](https://overactor.github.io/PixelPartyGenerator/) is a tool to create images for [/r/PixelParty](https://old.reddit.com/r/PixelParty/), where you can share inline pixel images in native reddit using markdown.

## How to use

Simply drag an image into the two boxes on the website and click "generate markdown". On the left, you will see the image as it would be displayed on [/r/PixelParty](https://old.reddit.com/r/PixelParty/), on the right you'll see the markdown necessary to post the image. Simply copy that and post it as a text post or comment to [/r/PixelParty](https://old.reddit.com/r/PixelParty/) (make sure you're using old reddit where custom CSS is allowed, or you won't see your image).

**attention:** Reddit has a character limit for posts and comments, so make sure to resize your image before using PixelPartyGenerator, it will not reduce the size of the image for you.

## How it works

[/r/PixelParty](https://old.reddit.com/r/PixelParty/) has a special, extremely hacky CSS, which displays certain links as fixed-width characters with a solid background color. This project reduces the color space of an image and then generates the markdown that [/r/PixelParty](https://old.reddit.com/r/PixelParty/) will render as that image. Read more about the system [here](https://old.reddit.com/r/PixelParty/wiki/guide).
