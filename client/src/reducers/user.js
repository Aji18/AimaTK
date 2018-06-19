const ADD_USER = 'USER_ADD_USER';

export class userDispatcher {
    static addUser(user_id, name, number) {
        return {
            type: ADD_USER,
            user_id, name, number
        };
    }
}
export let user = (state = [], action) => {
    switch (action.type) {
        case ADD_USER:
            return {
                user_id: action.user_id,
                name: action.name,
                number: action.number,
            };
        default:
            return state;
    }
};