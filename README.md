##amp-ads-testing

This projects tests the [amp-ad](https://github.com/ampproject/amphtml/blob/master/builtins/amp-ad.md) builtin from the [amphtml](https://github.com/ampproject/amphtml) project.

There are a number of permutations of ad types that need to be tested. The current approach is to split test cases based on the ad network hosting the ads and then pivot on ad formats. For example, when you navigate to the [main page](http://htmlpreview.github.io/?https://github.com/jasti/amp-ads-testing/blob/master/index.html) you'll notice test cases driven by ad network and format. For example : [DFP Image Tests](http://htmlpreview.github.io/?https://github.com/jasti/amp-ads-testing/blob/master/tests/dfp-image.amp.html).


###Running locally
Clone repo locally.
* Make sure you have [NodeJS and NPM](https://nodejs.org/en/) installed. See [this](http://rhumaric.com/2013/07/renewing-the-grunt-livereload-magic/) article for more details.

* Run 'npm install' 
* Run 'grunt server' : This should spawn on a local express server with live reload configured
* Open the chromium browser (preferably) and simulate the browser view to a mobile browser size and navigate to [localhost:9000/index.html](http://localhost:9000/index.html). Your edits to the local files will automatically reflect to the dev server when the file is saved.


###Gotchas

Always check the console for error indication if something is not working

* Beware of Doubeclick specific chrome extensions, they seem to mess with Doubleclick specific tags. Instead, use the latest chromium build where you don't have 3rd party extensions installed.

* If you are trafficking a 3rd party AdX tag, make sure the AdX account is linked in DFP, else the 3rd party tag will not return an ad.

* Ads don't seem to be working every single time. Especially AdX ones, it could simply be that no buyer is bidding, but sometimes you'll need to try a bunch of times before getting the ads to show up.

* If requesting 3rd party tags in DFP, make sure all resources being served by the 3rd party tag are over HTTPS. AMP only works with secure content.  (Requirements for SSL)



