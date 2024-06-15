import { userDB } from  '#userDB/userDB.js';

const {
    accessList
} = userDB.data;

export const grantAccessGroupToUser = async (input) => {

    // const isset = await accessList.users.findOne({
    //     user_id: input.user_id,
    //     group_id: input.group_id
    // })

    // if (isset) {
    //     const errorsList = ["This user has already been added to this group."]
    //     return {
    //         message: errorsList.join(''),
    //         errors: errorsList
    //     }
    // }
   
    const result = await accessList.users.create({
        user_id,
    });
   
    return result;
}