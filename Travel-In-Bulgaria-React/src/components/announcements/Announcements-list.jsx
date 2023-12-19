import { useEffect, useState } from "react";
import * as announcementService from "../../services/announcementService";
import AnnouncementsListItem from "./announcements-list-item/Announcements-list-item";
import Spinner from "../spinner/spinner";

export default function AnnouncementList() {
  const [announcements, setAnnouncements] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    announcementService.getAll()
      .then((result) => setAnnouncements(result))
      .catch((error) => console.log(error))
      .finally(()=> setIsLoading(false))
  }, []);
  return (
    <>
    {isLoading && <Spinner />}
    <div className="bg-cover flex flex-col min-h-screen bg-fixed bg-[url(./assets/asphalt-highway.jpg)]">
      <div className="grid grid-cols-1 md:grid-cols-3 pt-5 m-6  opacity-90">
          {announcements.map((announcement) => (
            <AnnouncementsListItem key={announcement._id} {...announcement} />
          ))}

          {!isLoading &&announcements.length === 0 && (
            <h3 className="text-slate-700 flex items-center justify-center text-4xl font-semibold mb-4">No announcements yet</h3>
          )}
        </div>
      </div>
    </>
  );
}
