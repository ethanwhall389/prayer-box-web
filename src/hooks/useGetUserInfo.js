export const useGetUserInfo = () => {
    const data = JSON.parse(localStorage.getItem("auth"));

    const split = data.displayName.split(' ');
    data.firstName = split[0];
    data.lastName = split[split.length-1];
    //{displayName, profilePhoto, userID, isAuth}

    const {displayName, firstName, lastName, profilePhoto, userID, isAuth} = data;

    return {displayName, firstName, lastName, profilePhoto, userID, isAuth};
}