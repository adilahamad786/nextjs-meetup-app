import { MongoClient, ObjectId } from "mongodb";
import MeetupDetails from "../../components/meetups/MeetupDetails";

function MeetupDetailsPage(props) {
  return (
    <MeetupDetails
      key={props.meetup.id}
      image={props.meetup.image}
      title={props.meetup.title}
      address={props.meetup.address}
      description={props.meetup.description}
    />
  );
}

export async function getStaticPaths() {

  const client = await MongoClient.connect("mongodb+srv://Ju123Atla:JEMUzqtQk6MI1aJi@cluster0.rm8ojbq.mongodb.net/meetups?retryWrites=true&w=majority");

  const db = client.db();

  const meetupsCollection = db.collection('meetups');

  const meetups = await meetupsCollection.find({}, {_id : 1}).toArray();

  client.close();

  return {
    fallback : false, // that means we define all static paths id inside the path array if path id not match inside the given paths array then simply give a 404 page bydefault, if we put as 'true' then we simple say if come any page id which are not contain in paths array then this render automatically according page.
    paths : meetups.map(meetup => ({ // generate dynamically paths using id's
      params : {
        meetupId : meetup._id.toString()
      }
    }))
  };
};

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId; // fetching meetupId form url params.

  // fetching meetups data for particular meetup (single meetup).
  const client = await MongoClient.connect("mongodb+srv://Ju123Atla:JEMUzqtQk6MI1aJi@cluster0.rm8ojbq.mongodb.net/meetups?retryWrites=true&w=majority");

  const db = client.db();

  const meetupsCollection = db.collection('meetups');

  const selectedMeetup = await meetupsCollection.findOne({_id : ObjectId(meetupId)});

  client.close();

  return {
    props : {
      meetup : {
        id : selectedMeetup._id.toString(),
        image : selectedMeetup.image,
        title : selectedMeetup.title,
        address : selectedMeetup.address,
        description : selectedMeetup.description
      }
    }
  };
};

export default MeetupDetailsPage;
