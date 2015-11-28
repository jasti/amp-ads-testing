##amp-ads-testing

This projects tests the [amp-ad](https://github.com/ampproject/amphtml/blob/master/builtins/amp-ad.md) builtin from the [amphtml](https://github.com/ampproject/amphtml) project.

There are a number of permutations of ad types that need to be tested. The approach is to pivot on ad formats. For example, when you navigate to the [main page](http://htmlpreview.github.io/?https://github.com/jasti/amp-ads-testing/blob/master/index.html) you will notice test cases per format. For example : [Image Tests](http://htmlpreview.github.io/?https://github.com/jasti/amp-ads-testing/blob/master/image.amp.html)


###Running locally
Clone to repo locally.
* Make sure you have [NodeJS and NPM](https://nodejs.org/en/) installed.
* Run 'npm install' 
* Run 'grunt server' : This should spawn on a local express server with live reload configured
* Open the chromium browser (preferably) and simulate the browser view to a mobile browser size and navigate to [localhost:9000/index.html](http://localhost:9000/index.html)

###Creating a test case
* Make sure you follow the spreadsheet
* Create a lineitem and reference 

###Gotchas
* Beware of Doubeclick specific extensions, they seem to mess with Doubleclick specific tags. Instead, use the latest chromium build where you don't have 3rd party plugins installed.

* If you are trafficking a 3rd party AdX tag, make sure the AdX account is linked in DFP, else the 3rd party tag will not return an ad.


