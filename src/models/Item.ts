import { Model, DataTypes } from 'sequelize';
import sequelize from '../common/db';

class Item extends Model {
	public id: number;

	public name: string;
}

Item.init({
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	},
	name: DataTypes.STRING,
	list_id: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
}, { sequelize });

export default Item;
