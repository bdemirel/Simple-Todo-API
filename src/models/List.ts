import { Model, DataTypes } from 'sequelize';
import sequelize from '../common/db';

class List extends Model {
	public id: number;

	public name: string;
}

List.init({
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	},
	name: DataTypes.STRING,
}, { sequelize });

export default List;
