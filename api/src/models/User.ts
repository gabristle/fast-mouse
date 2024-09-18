import { DataTypes, Model } from 'sequelize'
import sequelize from '../db/db-connection'
import Room from './Room'

class User extends Model {
    public uid!: string
    public name!: string
}

User.init (
    {
        uid: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize, modelName: 'User'
    }
)

User.belongsTo(Room, {foreignKey: 'roomCode'})

export default User