import { DataTypes, Model } from 'sequelize'
import sequelize from '../db/db-connection'
import User from './User'

class Room extends Model {
    public code!: string
}

Room.init (
    {
        code: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true
        }
    },
    {
        sequelize, modelName: 'Room'
    }
)

Room.hasMany(User, { foreignKey: 'roomCode'})

export default Room