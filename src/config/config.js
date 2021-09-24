const devURL = {
        LOGIN_URL: 'http://eurokab.info/dash',
        SIGNUP_URL: `https://auth.2serv.eu/auth/realms/master/protocol/openid-connect/registrations?client_id=membership_pay_dev&response_type=code&scope=openid%20email&redirect_uri=http://eurokab.info/dash&kc_locale=en`,
        PAYMENT_URL: `https://kli.one/pay/order/1`
}

const prodURL = {
        LOGIN_URL: 'https://kli.one/dash',
        SIGNUP_URL: `https://accounts.kab.info/auth/realms/main/protocol/openid-connect/registrations?client_id=membership_pay&response_type=code&scope=openid%20email&redirect_uri=https://kli.one/dash&kc_locale=en`,
        PAYMENT_URL: `https://kli.one/pay/order/1`
}

if (process.env.REACT_APP_STAGING === "true") {
        module.exports = devURL;
} else {
        module.exports = prodURL;
}
