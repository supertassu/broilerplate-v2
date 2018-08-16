module.exports = {
	"parser": "babel-eslint",
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
	},
    "extends": ["xo/esnext", "xo-react"],
    "plugins": [
        "react"
    ],
    "rules": {
		"react/prop-types": 0
    }
};
