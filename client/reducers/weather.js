function weather (state = [], action) {
    switch (action.type) {
        case 'GOT_WEATHER':
            return action.weather

            default:
                return state
    }
}

export default weather