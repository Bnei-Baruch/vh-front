module.exports = {
  apps : [{
    name: 'vh',
    script: 'yarn',
    args: 'start',
    interpreter: 'none',
    watch: '.',
		env_development: {
    	"APP_ENV": "development"
    },
		env_production: {
    	"APP_ENV": "production"
		},
  }, 
 ],
};
