##amp-ads-testing

This projects tests the [amp-ad](https://github.com/ampproject/amphtml/blob/master/builtins/amp-ad.md) builtin from the [amphtml](https://github.com/ampproject/amphtml) project.

There are a number of permutations of ad types that need to be tested. The current approach is to pivot on ad formats. For example, when you navigate to the [main page](http://htmlpreview.github.io/?https://github.com/jasti/amp-ads-testing/blob/master/index.html) you'll notice test cases driven by format. For example : [Image Tests](http://htmlpreview.github.io/?https://github.com/jasti/amp-ads-testing/blob/master/image.amp.html). When creating your own test cases, please follow the pattern :
* Create a test case for a format within it's own page.
* Follow the naming convention : Ad Network : Format, Permutation


###Running locally
Clone repo locally.
* Make sure you have [NodeJS and NPM](https://nodejs.org/en/) installed.
* Run 'npm install' 
* Run 'grunt server' : This should spawn on a local express server with live reload configured
* Open chromium browser and simulate the browser view to a mobile browser size and navigate to [localhost:9000/index.html](http://localhost:9000/index.html)


###Gotchas
* Beware of Doubeclick specific extensions, they seem to mess with Doubleclick specific tags. Instead, use the latest chromium build where you don't have 3rd party plugins installed.

* If you are trafficking a 3rd party AdX tag, make sure the AdX account is linked in DFP, else the 3rd party tag will not return an ad.

* Ads don't seem to be working every single time. Especially AdX ones, it could simply be that no buyer is bidding, but sometimes you'll need to try a bunch of times before getting the ads to show up.




