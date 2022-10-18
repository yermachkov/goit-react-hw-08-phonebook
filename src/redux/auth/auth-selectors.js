export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectUsername = state => state.auth.user.name;

export const selectIsFetchingCurrent = state => state.auth.isFetchingCurrent;
