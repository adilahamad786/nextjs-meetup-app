import { MongoClient } from 'mongodb';
import Head from 'next/head';
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

function HomePage(props) { 
  return (
    <>
      <Head>
        <title>A Meetup App</title>
        <meta
          name='description'
          content='This is a huge list of highly active nextjs app.'
        />
      </Head>
      <MeetupList meetups={props.meetups} />
    </>
  );
}

// // run for each request on server and generate each time a new page on server for serving to client.
// export async function getServerSideProps(context) { // work as middleware like node js and also give more backend functinality to check authentication because this function run on server.
//   const req = context.req;
//   const res = context.res;

//   // fetch data from APIs and many more

//   return {
//     props : {
//       meetups : DUMMY_MEETUPS
//     }
//   }
// }

export async function getStaticProps() { // this function run during the bulid process and generate meaningfull static page for helps to improve SEO.
  // also able to fetch data form APIs.

  const client = await MongoClient.connect("mongodb+srv://Ju123Atla:JEMUzqtQk6MI1aJi@cluster0.rm8ojbq.mongodb.net/meetups?retryWrites=true&w=majority");

  const db = client.db();

  const meetupsCollection = db.collection('meetups');

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props : {
      meetups : meetups.map(meetup => ({
          title : meetup.title,
          address : meetup.address,
          image : meetup.image,
          id : meetup._id.toString()
        }))
    },
    revalidate : 1  // this time the static page regenerate every 1 second accourding to available data on server side and generate new static page on server for serve a new page after every 1 second.
  };
};

export default HomePage;