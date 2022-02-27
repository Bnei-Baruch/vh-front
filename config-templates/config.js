window.APP_CONFIG = {
    BUILD_TIME: '{{ (time.Now).UTC }}',
    REG_BRANCH: '{{env.Getenv "CI_COMMIT_REF_NAME" "-"}}',
    REF_VERSION: '{{env.Getenv "CI_COMMIT_SHA" "-"}}',
    SIGNUP_URL: '{{env.Getenv "KEYCLOAK_SIGNUP_URL"  "https://auth.2serv.eu/auth/realms/master/protocol/openid-connect/registrations?client_id=membership_pay_dev&response_type=code&scope=openid%20email&redirect_uri=http://eurokab.info/dash&kc_locale=en"}}',
    KEYCLOAK_CONFIG: {
        realm: '{{env.Getenv "KEYCLOAK_REALM" "master"}}',
        url: '{{env.Getenv "KEYCLOAK_URL" "https://auth.2serv.eu/auth/"}}',
        clientId: '{{env.Getenv "KEYCLOAK_CLIENT_ID" "membership_pay_dev"}}'
    }
};