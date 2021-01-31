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

// there is a problem with PM2 env variable.
// for now this should do for production
// will then change value for dev. 

if (process.env.NODE_ENV === "production") { 
	module.exports = keycloakConfigProd; 
} else {
	module.exports = keycloakConfigProd;
}
