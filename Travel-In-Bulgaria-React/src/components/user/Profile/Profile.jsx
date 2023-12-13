import { useEffect, useState } from "react";

import * as authService from "../../../services/authService"
import ViewProfile from "./ProfileModes/ViewProfile";
import { useParams } from "react-router-dom";

//DA OPRAVQ PROFILA!!!!!!!!1
const Profile = () => {
 
    const [ user, setUser ] = useState({});

    const { userId } = useParams()

    useEffect(() => {
        authService.getUserInfo()
            .then((result) => setUser(result))
    },[userId]);

    return(
        <>
            {<ViewProfile key={user._id} {...user} />}
        </>
    )
}

export default Profile;