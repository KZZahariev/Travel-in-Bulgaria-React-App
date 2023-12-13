import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import * as announcementService from "../../services/announcementService"
import ViewModeCurrentAnn from "./current-announcement/viewModeCurrentAnnouncement";

const CurrentAnnouncement = () => {
    const [announcement, setAnnouncement] = useState({});
    const { announcementId } = useParams()

    useEffect(() => {
        announcementService.getOne(announcementId)
            .then((result) => setAnnouncement(result));
        }, [announcementId])
    return(
        <div>
        {/* ---------------------VIEW MODE----------------- */}
            {<ViewModeCurrentAnn key={announcementId} {...announcement}/>}
        </div>
    )
}

export default CurrentAnnouncement;