import sequelize from '../common/db';
import Item from './Item';
import List from './List';

// Relations
Item.belongsTo(List, {
	foreignKey: 'list_id',
	onDelete: 'CASCADE',
});

List.hasMany(Item, {
	foreignKey: 'list_id',
	onDelete: 'NO ACTION',
});

// Sync
sequelize.sync();

export { Item, List };
