import Sequelize from 'sequelize';
import sequelize from './sequelize';

const Greeting = sequelize.define('greeting', {
	text: {type: Sequelize.STRING, allowNull: false},
	language: {type: Sequelize.STRING, defaultValue: 'en_US'}
}, {
	timestamps: true
});

Greeting.prototype.toJSON = function () {
	return {
		id: this.id,
		language: this.language,
		text: this.text
	};
};

export default Greeting;
