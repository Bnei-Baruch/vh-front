window.APP_CONFIG = {
  SIGNUP_URL: `https://auth.2serv.eu/auth/realms/master/protocol/openid-connect/registrations?client_id=membership_pay_dev&response_type=code&scope=openid%20email&redirect_uri=http://eurokab.info/dash&kc_locale=en`,
  KEYCLOAK_CONFIG: {
	realm: "master",
	url: "https://auth.2serv.eu/auth/",
	clientId: "membership_pay_dev"
},
};
