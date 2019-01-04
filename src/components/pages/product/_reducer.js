import image from "../../../assets/lagartija.png"
const productsMOCK = [
    {id: 1, title: 'Essentially1 unchanged', media: image, descrip:'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica'},
    {id: 2, title: 'Essentially2 unchanged', media: image, descrip:'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica'},
    {id: 3, title: 'Essentially3 unchanged', media: image, descrip:'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica'},
    {id: 4, title: 'Essentially4 unchanged', media: image, descrip:'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica'},
    {id: 5, title: 'Essentially5 unchanged', media: image, descrip:'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica'},
];

const initialState = {
    products: productsMOCK,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {

        // case 'ACCOUNT_CURRENT_USER_CHANGED' :
        //     return {...state,currentUser: action.payload};

        default:
            return state;
    }

}

export default reducer;
