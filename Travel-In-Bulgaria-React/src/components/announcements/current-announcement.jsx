import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as announcementService from "../../services/announcementService"
import ViewModeCurrentAnn from "./current-announcement/ViewModeCurrentAnnouncement";
import EditModeCurrentAnn from "./current-announcement/EditModeCurrentAnnouncement";

const CurrentAnnouncement = () => {
    const [announcement, setAnnouncement] = useState({});
    const announcementId = useParams()

    useEffect(() => {
        announcementService.getOne(announcementId.announcementId)
            .then((result) => setAnnouncement(result));
    }, [announcementId])
    return(
    <div>
    {/* ---------------------VIEW MODE----------------- */}
        {<ViewModeCurrentAnn key={announcementId} {...announcement}/>}
    {/* <!-- ----------------EDIT MODE------------- --> */}
        {<EditModeCurrentAnn key={announcementId} {...announcement} />}
    </div>
    )
}

export default CurrentAnnouncement;