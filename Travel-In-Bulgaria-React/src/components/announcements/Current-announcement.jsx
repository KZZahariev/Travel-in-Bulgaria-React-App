import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import * as announcementService from "../../services/announcementService"
import ViewModeCurrentAnn from "./current-announcement/ViewModeCurrentAnnouncement";
import AuthContext from "../../contexts/authContext";

const CurrentAnnouncement = () => {
    const [announcement, setAnnouncement] = useState({});
    const { announcementId } = useParams()
    const { userId } = useContext(AuthContext)

    useEffect(() => {
        announcementService.getOne(announcementId)
            .then((result) => setAnnouncement(result))
        }, [announcementId])

        const isReserved = announcement?.subscribers?.includes(userId);
    return(
        <div>
        {/* ---------------------VIEW MODE----------------- */}
            {<ViewModeCurrentAnn key={announcementId} announcement={announcement} isReserved={isReserved}/>}
        </div>
    )
}

export default CurrentAnnouncement;
