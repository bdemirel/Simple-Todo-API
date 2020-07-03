import { Model } from 'sequelize';
import sequelize from '../common/db';

class Item extends Model {}
Item.init({

}, { sequelize });
