import { Model } from 'sequelize';
import sequelize from '../db';

class Item extends Model {}
Item.init({

}, { sequelize });
