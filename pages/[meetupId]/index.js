import MeetupDetails from "../../components/meetups/MeetupDetails";

function MeetupDetailsPage() {
  return (
    <MeetupDetails
      key='a1'
      image="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1024px-Stadtbild_M%C3%BCnchen.jpg"
      title="A First Meetup"
      address="Some street 5, some city"
      description="The meetup description."
    />
  );
}

export default MeetupDetailsPage;
