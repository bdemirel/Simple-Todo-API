import { Model, DataTypes } from 'sequelize';
import sequelize from '../common/db';

class Item extends Model {}
Item.init({
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	},
	name: DataTypes.STRING,
}, { sequelize });

export default Item;
