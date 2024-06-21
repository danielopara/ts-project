import { Model, Optional, DataTypes } from "sequelize";
import sequelize from "../config/db";

interface UserAttributes{
    id: number;
    firstName: string;
    lastName: string;
    email: string;
}

interface UserCreationAttributes extends Optional<UserAttributes, 'id'>{}


class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes{
    public id!: number;
    public firstName!: string;
    public lastName!: string;
    public email!: string;

    //timestamps
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

// initialize the user model

User.init({
    id:{
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    firstName:{
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName:{
        type:DataTypes.STRING,
        allowNull: false
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'users',
    sequelize
})

sequelize.sync()
 .then(() => console.log('Table created successfully'))
 .catch(error => console.error('Failed to create table:', error));

export default User;
