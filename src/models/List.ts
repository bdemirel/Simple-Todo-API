import { Model } from 'sequelize';
import sequelize from '../db';

class List extends Model {}
List.init({

}, { sequelize });
