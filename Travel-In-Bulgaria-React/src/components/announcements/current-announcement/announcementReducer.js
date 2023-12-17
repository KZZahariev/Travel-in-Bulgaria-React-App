const announcementReducer = (state, action) => {

    switch (action?.type) {
        case 'RESERVE':
            return [...state, action.payload];
        default:
            return state;
    }
}

export default announcementReducer;
