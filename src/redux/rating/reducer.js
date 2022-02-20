import { ADD_RATING } from "./types";

const initialState = {
  rates: 0,
  usersId: [],
};

const ratingReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_RATING:
      return {
        usersId: mangeUser(state.usersId, action.payload.userId),
        rates:
          state.rates === 0
            ? action.payload.rate
            : addNewRate(
                state.usersId,
                action.payload.userId,
                state.rates,
                action.payload.rate
              ),
      };
    default:
      return state;
  }
};
export default ratingReducer;

const addNewRate = (users, newUser, rates, newRate) => {
  // newUser or undefined
  const existingUser = users.find((id) => id === newUser);
  if (existingUser) {
    return Number(rates);
  } else {
    return (Number(rates) + Number(newRate)) / Number(users.length + 1);
  }
};

const mangeUser = (users, newUser) => {
  const existingUser = users.find((user) => user === newUser);
  if (existingUser) {
    return users;
  } else {
    return [...users, newUser];
  }
};
