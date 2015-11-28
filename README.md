# amp-ads-testing


#Running Locally
Run any server locally in this folder and you load the index.html page
e.g. python -m SimpleHTTPServer 8000

##Creating your own test page
base.html page is a base AMP page. Clone the page to create new pages of your own

###Creating a test case
* Make sure you follow the spreadsheet
* Create a lineitem and reference 

###Gotchas
* Beware of Doubeclick specific extensions, they seem to mess with Doubleclick specific tags. Instead, use the latest chromium build where you don't have 3rd party plugins installed.

* If you are trafficking a 3rd party AdX tag, make sure the AdX account is linked in DFP, else the 3rd party tag will not return an ad.

* 

