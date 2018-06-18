import sequelize from './sequelize';
import Sequelize from 'sequelize';

const Greeting = sequelize.define('greeting', {
	text: Sequelize.STRING,
	language: Sequelize.STRING
}, {
	timestamps: true
});

Greeting.prototype.toJSON = function () {
	return {
		id: this.id,
		lang: this.language,
		text: this.text
	};
};

module.exports = Greeting;
