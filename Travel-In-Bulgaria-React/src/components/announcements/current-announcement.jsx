import { useEffect, useReducer, useState } from "react";
import { useParams } from "react-router-dom";

import * as announcementService from "../../services/announcementService"
// import * as commentService from "../../services/commentService"
import ViewModeCurrentAnn from "./current-announcement/viewModeCurrentAnnouncement";
// import reducer from "./commentReducer";

const CurrentAnnouncement = () => {
    const [announcement, setAnnouncement] = useState({});
    // const [comments, setComments] = useState({});
    // const [comments, dispatch] = useReducer(reducer, []);
    const { announcementId } = useParams()

    useEffect(() => {
        announcementService.getOne(announcementId)
            .then((result) => setAnnouncement(result))
            // .then((result) => {
            //     dispatch({
            //         type:'GET_ALL_COMMENTS',
            //         payload: result.comments
            //     })
            // })

        // commentService.getAll(announcementId)
        //     .then((result) => setComments(result))
        }, [announcementId])

    return(
        <div>
        {/* ---------------------VIEW MODE----------------- */}
            {<ViewModeCurrentAnn key={announcementId} {...announcement}/>}
        </div>
    )
}

export default CurrentAnnouncement;