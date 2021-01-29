const keycloakConfigProd = 
	{
  	realm: "main",
	  url: "https://accounts.kab.info/auth/",
  	clientId: "membership_pay"
	}

const keycloakConfigDev = 
	{ 
		realm: "master", 
		url: "http://auth.2serv.eu/auth/", 
		clientId: "membership_pay" 
	} 

if (process.env.NODE_ENV !== 'production') { 
	module.exports = keycloakConfigProd; 
} else {
	module.exports = keycloakConfigDev
}
