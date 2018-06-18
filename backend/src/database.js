import sequelize from './models/sequelize';
import {Op} from 'sequelize';

exports.sync = options => sequelize.sync(options);
exports.transaction = options => sequelize.transaction(options);
exports.close = options => sequelize.close(options);
exports.Op = Op;
