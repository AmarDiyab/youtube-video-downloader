# Chrome Plugin for Downloading Youtube Videos

# Project Setup

## Run Server Locally :

1. you need to have `node-js` installed locally

```shell    
git clone 
cd youtube-video-downloader
npm install
node index.js
```

## Upload Extension to Chrome :

1. open `chrome://extensions` in the chrome browser
2. set `Developer Mode` On
3. click load unpacked and load the `src` directory of this repository
4. After doing so, extension icon button will start to appear in extension place
5. Open any youtube video and click on extension icon
6. fill up the required details and click `Download`
7. Video will be downloaded to `YoutubeDownloader` folder in default downloads directory