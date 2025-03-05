export const useGetUserInfo = () => {
    const data = JSON.parse(localStorage.getItem("auth"));

    if (!data) {
        return {}
    }

    const split = data.displayName.split(' ');
    data.firstName = split[0];
    data.lastName = split[split.length-1];
    //{displayName, profilePhoto, userID, isAuth}

    const {displayName, firstName, lastName, profilePhoto, userID, isLoggedIn} = data;

    return {displayName, firstName, lastName, profilePhoto, userID, isLoggedIn}

}