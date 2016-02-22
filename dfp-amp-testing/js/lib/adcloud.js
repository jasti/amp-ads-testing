/*
Placeholder for real AdCloud API library //adcloud-api.googleplex.com/adcloud.js

Does not call actual API in localhost due to cross-origin request being blocked.
*/
define(function(){
	var ac = {};
	return ac = {
		run: function(version, prod_mode, method, params, callback){
			AdCloud.run(version, prod_mode, method, params, callback);
		},

		doPost: function(version, prod_mode, method, payload, callback){
			AdCloud.doPost(version, prod_mode, method, payload, callback);
		},

		getClientsByLdap: function getClientsByLdap(ldap){
			return new Promise(function(resolve, reject){
				ac.run("v1", "prod", "getClientIdsByLdap", {
					ldap: ldap
				}, function(response){
					resolve(response.response_body);
				});
			});
		},

		getPropertyDetails: function getPropertyDetails(clientIds){
			return new Promise(function(resolve, reject){
				ac.run("v1", "prod", "getPropertyDetails", {
					clientIds: clientIds
				}, function(response){
					resolve(response.response_body);
				});
			});
		}
	};
})