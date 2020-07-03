import sequelize from '../common/db';
import Item from './Item';
import List from './List';

// Relations
Item.belongsTo(List);
List.hasMany(Item);

// Sync
sequelize.sync();

export { Item, List };
