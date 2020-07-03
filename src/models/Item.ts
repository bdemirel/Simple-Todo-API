import { Model, DataTypes } from 'sequelize';
import sequelize from '../common/db';
import List from './List';

class Item extends Model {}
Item.init({
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	},
	name: DataTypes.STRING,
}, { sequelize });

Item.belongsTo(List);

export default Item;
