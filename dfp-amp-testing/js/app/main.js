require([
	"jquery", 
	"mustache",
	"adcloud",
	"text!html/formatresponse.mst.html", 
	"goog!visualization,1,packages:[table]",
	"grayscale",
	"bootstrap"
	], function($, Mustache, AdCloud, formatTemplate){
		"use strict;"

		init();


		function getData(url){
			return new Promise(function(resolve, reject) {
			//Get Google Sheet data that has UGS calendar data; sheet has to be published to web to access via API
			new google.visualization.Query(url)
			.send(function(response){
				if (response.isError()){
					reject(Error('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage()));
				}
				resolve(response.getDataTable());
			});
		});
		}

		function parseTemplates(data){

			//console.log (data);
			var n = data.getNumberOfRows(),
			rows = new Array(n);
			for(var i = 0; i < n; i++){
				
				rows[i] = {
					templateName: data.getValue(i, 0),
					templateDesc: data.getValue(i, 1),
					templateFeatures: (data.getValue(i, 2) || "").split("\n"),
					templateEnv: data.getValue(i, 3),
					templateOS: data.getValue(i, 4),
					templateID: data.getValue(i, 5),
					templateMRAID2: data.getValue(i, 6),
					templateYTDemo: data.getValue(i, 7),
					templateImage: data.getValue(i, 8),

				};
			}
		
		return rows;
	}
	function renderFormats(formats) {
		return $(Mustache.render(formatTemplate, {rows: formats}));
	}


	

	function init() {

			//Get Mobile Formats data
			var mobilePromise = getData('https://docs.google.com/spreadsheets/d/1O-u2k6xVC95WECkOJum_klSJAAkaqs_UgOAgk-gH6QI/gviz/tq?sheet=Mobile')
			.then(parseTemplates);

			mobilePromise.then(renderFormats).then(function($detailedFormat){
				$("#mobileList").append($detailedFormat);
			});
			

			//Get Desktop Formats data
			var desktopPromise = getData('https://docs.google.com/spreadsheets/d/1O-u2k6xVC95WECkOJum_klSJAAkaqs_UgOAgk-gH6QI/gviz/tq?sheet=Desktop')
			.then(parseTemplates);			

			desktopPromise.then(renderFormats).then(function($detailedFormat){
				
				$("#desktopList").append($detailedFormat);

			});



			(function ($) {
				$.expr[':'].Contains = function(a,i,m){
					return (a.textContent || a.innerText || "").toUpperCase().indexOf(m[3].toUpperCase())>=0;
				};

				var sourceName = "#mobileList";

				$("#mobile-button").on('click', function(e){sourceName = "#mobileList";});

				$("#desktop-button").on('click', e => sourceName = "#desktopList");

				$(function () {
					var form = $("<form>").attr({"class":"filterform","action":"#"}),
					input = $("<input>").attr({"class":"filterinput","type":"text"});
					$(form).append(input).appendTo(header);

					$(input)
					.change( function() {
						var filter = $(this).val();
						if(filter) {
							$(sourceName).find(".fullformat:not(:Contains(" + filter + "))").parent().slideUp();
							$(sourceName).find(".fullformat:Contains(" + filter + ")").parent().slideDown();
						} else {
							$(sourceName).find(".entry").slideDown();
						}
						return false;
					})
					.keyup( function () {
						$(this).change();
					});
				});
			}(jQuery));

		}

	});