import User from "../model/User";

interface CreateUserDto{
    firstName: string,
    lastName: string,
    email: string
}

class UserService{

    async getAllUsers(){
        try{
            return await User.findAll();
        } catch (error){
            throw new Error('failed to get all users ' + error);
        }
    }

    async createUser(createUser: CreateUserDto){
        try{
            if (!createUser.firstName) {
                throw new Error('Missing required field: firstName');
              }
              if (!createUser.lastName) {
                throw new Error('Missing required field: lastName');
              }
              if (!createUser.email) {
                throw new Error('Missing required field: email');
              }

            return await User.create(createUser);
        } catch (error){
            throw new Error("failed to create user " + error);
        }
    }
}

export default new UserService();