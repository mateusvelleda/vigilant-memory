import { createStore } from 'redux';

const initialState = {
    links: []
};

const reducer = (state, action) => {
    console.log(state);
    console.log(action);
    switch (action.type) {
        case 'ADD_LINK':
            // let links = [...state.links, action.data];
            // console.log(merge(state.links, action.data));
            return Object.assign({}, {links: [...state.links, action.data]});

        default:
            console.log('nao')
    }
    return state;
};

const store = createStore(reducer, initialState);
export default store;