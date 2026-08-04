window.APP_CONFIG = {
    SHORT_SHA: '{{env.Getenv "SHORT_SHA" "-"}}',
    SIGNUP_URL: '{{env.Getenv "KEYCLOAK_SIGNUP_URL"  "https://accounts.kab.sh/auth/realms/main/protocol/openid-connect/registrations?client_id=membership_pay&response_type=code&scope=openid%20email&redirect_uri=https://staging-vh.kli.one/dash&kc_locale=en"}}',
    KEYCLOAK_CONFIG: {
        realm: '{{env.Getenv "KEYCLOAK_REALM" "main"}}',
        url: '{{env.Getenv "KEYCLOAK_URL" "https://accounts.kab.sh/auth/"}}',
        clientId: '{{env.Getenv "KEYCLOAK_CLIENT_ID" "membership_pay"}}'
    }
};
