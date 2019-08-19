//= ==============Category Actions==================
// send submit request
export const SEND_FEEDBACK = 'SEND_FEEDBACK';
export const SEND_FEEDBACK_FAIL = 'SEND_FEEDBACK_FAIL';
export const SEND_FEEDBACK_SUCCESS = 'SEND_FEEDBACK_SUCCESS';

//= ==============End===========================
const defaultFeedback = {
    email: 'invaild',
    first: 'invaild',
    last: 'invaild',
    message: 'invaild',
};
const initialState = {
    feedback: defaultFeedback,
    requesting: false,
    error: false,
};

/**
 *
 * @param {*} feedback
 * @returns {feedback validate object}
 */
export function sendFeedback(feedback) {
    // send submit request
    let api = `/feedback`;
    return {
        type: SEND_FEEDBACK,
        payload: {
            client: 'default',
            request: {
                method: 'post',
                url: api,
                data: feedback,
            },
        },
    };
}
const actionsMap = {
    [SEND_FEEDBACK]: (state, action) => {
        // call
        return {
            ...state,
            requesting: true,
            feedback: defaultFeedback,
            error: false,
        };
    },
    [SEND_FEEDBACK_SUCCESS]: (state, action) => {
        // success
        let { data } = action.payload;
        return {
            ...state,
            feedback: data,
            requesting: false,
            error: false,
        };
    },
    [SEND_FEEDBACK_FAIL](state, action) {
        // failures
        return {
            ...state,
            requesting: false,
            error: true,
            feedback: defaultFeedback,
        };
    },
};

export default function feedbackReducer(state = initialState, action) {
    const reduceFn = actionsMap[action.type];
    if (!reduceFn) return state;
    return reduceFn(state, action);
}
