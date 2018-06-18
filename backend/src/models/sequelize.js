import Sequelize from 'sequelize';

const sequelize = new Sequelize(process.env.DATABASE_URL, {
	logging: false,
	operatorsAliases: false
});

export default sequelize;
