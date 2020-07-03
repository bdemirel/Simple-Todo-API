import { Model, DataTypes } from 'sequelize';
import sequelize from '../common/db';
import Item from './Item';

class List extends Model { }
List.init({
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	},
	name: DataTypes.STRING,
}, { sequelize });

List.hasMany(Item);

export default List;
