import { Model } from 'sequelize';
import sequelize from '../common/db';

class List extends Model { }
List.init({

}, { sequelize });
