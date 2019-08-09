const defaultstate =
{
    persons: [],
    edit: false,
    editIndex: -1
}
const TestForm = (state = defaultstate, action) => {
    switch (action.type) {
        case 'onSubmit':
            console.log("Test Form: onSubmit")
            debugger
            if (state.edit) {
                let allPersons = [...state.persons];
                allPersons[action.index] = action.data;
                return { ...state, persons: allPersons }
            }
            else {
                let allPersons = [...state.persons];
                allPersons.push(action.data);
                return { ...state, persons: allPersons }
            }
        case 'editHandler':
            console.log("Test Form: editHandler")
            debugger
            return { ...state, edit: action.edit, editIndex: action.editIndex };
        case 'deleteHandler':
            console.log("Test Form: deleteHandler")
            let allPersons = [...state.persons];
            allPersons.splice(action.index, 1);
            return ({ ...state, persons: allPersons });
        default:
            return state;
    }
}

export default TestForm;