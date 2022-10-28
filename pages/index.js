import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "a1",
    title: "A First Meetup!",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1024px-Stadtbild_M%C3%BCnchen.jpg",
    address: "some address 5, 12345 some city",
    description: "This is a first meetup!",
  },
  {
    id: "a2",
    title: "A Second Meetup!",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1024px-Stadtbild_M%C3%BCnchen.jpg",
    address: "some address 5, 12345 some city",
    description: "This is a second meetup!",
  },
];

function HomePage() {
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    // may be fetching data from server
    setLoadedMeetups(DUMMY_MEETUPS);
  }, [])

  return (
    <MeetupList meetups={loadedMeetups} />
  );
}

export default HomePage;

// NOTE : problem with this code is that in the initial load the meetups contain empty array so page render without meetups data, then next convert it initial state as a static page, after this useEffect run then change empty array to fetched data and reload meaningful page, but the static page contain only first state snapshot so this is a problem for SEO.
