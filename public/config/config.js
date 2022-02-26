window.APP_CONFIG = {
        SIGNUP_URL: `https://accounts.kab.info/auth/realms/main/protocol/openid-connect/registrations?client_id=membership_pay&response_type=code&scope=openid%20email&redirect_uri=https://kli.one/dash&kc_locale=en`,
        KEYCLOAK_CONFIG: {
        realm: "main",
        url: "https://accounts.kab.info/auth/",
        clientId: "membership_pay"
    }
};