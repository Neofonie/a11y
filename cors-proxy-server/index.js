import puppeteer from 'puppeteer-core';
import express from 'express';
import url from 'url';

const app = express();
const port = 1337;

const handleBrowser = async () => {
  return await puppeteer.launch({
    //executablePath: './node_modules/puppeteer/.local-chromium/linux-800071/chrome-linux/chrome',
    //executablePath: './node_modules/chromium/lib/chromium/chrome-linux/chrome',
    //executablePath: 'google-chrome-stable',
    //executablePath: 'google-chrome',
    // unix: snap install chromium
    executablePath: "/snap/bin/chromium",
    // windows
    //executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    args: ["--no-sandbox", "--disable-setuid-sandbox"]
  });
};

const exec = async (url, default_, callback) => {
  let browser;
  let page;
  let data = default_;

  console.log('exec start', { url });

  //console.log("before handleBrowser");
  try {
    browser = await handleBrowser();
  } catch (e) {
    console.log('browser error', e);
    data.error = 'browser cant init';
    data.stack = e;
  }

  if (browser) {
    //console.log("before browser.newPage");
    try {
      page = await browser.newPage();
    } catch (e) {
      console.log('newPage error', e);
      data.error = 'page cant init';
      data.stack = e;
    }

    if (page) {
      //console.log("before page.goto");
      try {
        await page.goto(url, {
          waitUntil: 'networkidle2',
          timeout: 60000
        });
      } catch (e) {
        data.error = 'page cant goto';
        data.stack = e;
      }
      //console.log("before callback");

      try {
        data = await callback(page);
      } catch (e) {
        data.error = 'callback cant exec';
        data.stack = e;
      }

      // console.log({ data });

      console.log('exec done', { url });
    }
    await browser.close();
  }
  return data;
};

app.get('/cors', async function(req, res) {
  res.writeHead(200, { 'Content-Type': 'application/json' });

  const q = url.parse(req.url, true).query;
  let _url = q.url.replace('/cors?url=', '');
  let data = {};

  try {
    data = await exec(
      _url,
      {
        title: 'not found',
        url: req.url
        html: '',
      },
      async (page) => {
        return page.evaluate(() => {
          const url = location.href;
          let title = document.querySelector("title").innerText;
          let html = document.documentElement.outerHTML;

          return {
            title,
            url,
            html,
          };
        });
      }
    );
  } catch (e) {
    data = { error: 'not possible', stack: e };
  }
  res.end(JSON.stringify(data));
});

app.listen(port, () => {
  console.log('\n\n\n\nProxy gestartet --port ' + port);
  console.log('http://localhost:1337/cors?url=https://www.neofonie.de');
  console.log('http://a11y.neofonie.de:1337/cors?url=https://www.neofonie.de');
  console.log('https://a11y.neofonie.de/cors?url=https://www.neofonie.de');
});
