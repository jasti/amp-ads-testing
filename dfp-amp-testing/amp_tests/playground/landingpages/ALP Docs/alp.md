### **Feature**
AMP Ad Landing Pages
### **Description**
Clicking on traditional landing pages is not a desirable user experience for the following reasons:

1. Clicking on the ad routes the user to an adserver click tracker first and then the landing page. 
	
2. The landing page itself is slow to load
	
3. How the landing page loads is not deterministic. Depending on the operating system and ad server, the landing page could open in a new tab, on the same tab or in a custom tab.

![image alt text](Android_LP.gif)

### **Solution**

We’ve made the user experience that follows an ad click to be always fast and consistent. 

1. Clicking on an ad routes the user immediately to the landing page but still fires the adserver click tracking event in the background.
	
2. The landing page loads in an instant. Most pages load under 1 second.
	
3. The landing page will always open in a consistent way, similar to if you clicked on a link that points to an AMP page on an AMP article.

The benefits of AMP Ad landing pages can be achieved in both scenarios where:

1. The host page is in AMP and the landing page is also in AMP
	
2. The host page is not in AMP and the landing page is in AMP

See below for a quick demo on how this work on the Google search viewer. Also note that the viewer provides an easy back button which puts the user back in the reading context.

![image alt text](Google_Viewer.gif)

### **Requirements for ALP system to work :**

1. In order to achieve this benefit, publishers need to add a small piece of JavaScript in their creative, like below: 

	<script async src="https://cdn.ampproject.org/alp.js"></script>

2. The ALP system does not require any changes to click URLs. However, all click destinations must have the AMP cache prefix https://cdn.ampproject.org/c/ and they must be statically recognizable inside the click URL (there cannot be any intermediate redirects).

### **How do we achieve this speed?**

1. **Pre-connect to landing page:** Normal ads do not generally know the URL of the actual landing page. ALPs always know it and thus can issue a preconnect request to the respective landing page which reduces the time it takes to navigate the user to the landing page after user click.

2. **Pre-fetch landing pages:** Simple non-CPU intensive resources that are visible on the first viewport of the landing page are requested even before the user clicks on the ad.

3. **Delivering Google Cache URL when available:** Ad servers can take advantage of the [public AMP URL API](https://developers.google.com/amp/cache/reference/acceleratedmobilepageurl/rest/) which will translate a given canonical URL to AMP URL. DoubleClick for Publishers (DFP) will be the first ad server that will integrate this feature where publishers (with consent) can expect the ad server to automatically serve the destination URL as the Google AMP Cache URL when available. 

4. **Zero Redirects:** When possible, AMP eliminates redirects to the adserver by only triggering the click event after the user has reached the landing page. AMP also supports the [amp-pixel](https://github.com/ampproject/amphtml/blob/master/builtins/amp-pixel.md) component for 3rd party tracking redirects which can be performed on the landing page. 

### If you are a Publisher:

One of the best use-cases for using AMP landing pages is for serving your Sponsored Content Pages or house marketing pages. This means that your landing pages must be in AMP format. 

### If you are an advertiser:

You will need to ensure that your ad landing pages are in AMP format. 

More than 650K domains already publish AMP pages today and growing everyday. Advertisers can choose from a number of existing [AMP components](https://github.com/ampproject/amphtml/tree/master/extensions) like carousel, video, lightbox and many more to build interactive, beautiful AMP landing pages. AMP pages also support amp-iframe in cases where you’d like to embed components that are not yet supported in AMP. 

To learn more about how to convert your regular pages to AMP, please see [tutorial here](https://www.ampproject.org/docs/get_started/create.html). 

### To serve ads with ALPs in DFP adserver, follow instructions below:

In DFP, when uploading the creative, use the creative type : Custom - this will allow you to plug-in the alp.js script.

![image alt text](dfp.png)

### **Issues currently being worked on:**

1. The DFP ad server to automatically serve AMP landing page when it exists even if the trafficker inputs a canonical landing page URL using [this](https://developers.google.com/amp/cache/reference/acceleratedmobilepageurl/rest/) service.* (Ready to be in GA End of Q3, 16)*
	
2. Integration with Google Analytics Conversion trackers *(Expected  to be in GA by End of Q3, 16)*

### **Reporting an Issue/ Feature Request**

Please open a Github Issue/ feature request on the [AMP project repo](https://github.com/ampproject/amphtml/issues) OR contact jastiv@google.com

