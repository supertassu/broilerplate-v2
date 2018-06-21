import {Op} from 'sequelize';
import sequelize from './models/sequelize';

exports.sync = options => sequelize.sync(options);
exports.close = options => sequelize.close(options);

exports.Op = Op;
