const initialState = {
    counterSum: 0,
    counterArr: []
};

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case 'GENERATE_COUNTERS':
            return {
                ...state,
                counterArr: new Array(parseInt(payload))
                    .fill(0)
                    .map(() => ({count: 0, id: generateId()}))
            };
        default:
            return state;
    }
};

const generateId = () => {
    return new Date().getTime() + Math.random();
};