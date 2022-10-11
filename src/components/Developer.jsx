
 export const actions = {
    addDeveloper: "addDeveloper",
    deleteDeveloper: "deleteDeveloper"
 }

    export const Developer = (state, action) => {
        switch (action.type) {
            case actions.addDeveloper:
                return [
                    ...state,
                    {
                        id: state.length + 1,
                        name: action.payload.name,
                        email: action.payload.email,
                        username: action.payload.username,
                        address: action.payload.address,
                        age: action.payload.age
                    }
                ];
            case actions.deleteDeveloper:
                return state.filter((dev) => dev.id !== action.payload.id);
            default:
                return state;
        }
    }




