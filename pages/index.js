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
    <MeetupList meetups={props.meetups} />
  );
}

// run for each request on server and generate each time a new page on server for serving to client.
export async function getServerSideProps(context) { // work as middleware like node js and also give more backend functinality to check authentication because this function run on server.
  const req = context.req;
  const res = context.res;

  // fetch data from APIs and many more

  return {
    props : {
      meetups : DUMMY_MEETUPS
    }
  }
}

// export async function getStaticProps() { // this function run during the bulid process and generate meaningfull static page for helps to improve SEO.
//   // also able to fetch data form APIs.
//   return {
//     props : {
//       meetups : DUMMY_MEETUPS
//     },
//     revalidate : 10  // this time the static page regenerate every 10 second accourding to available data on server side and generate new static page on server for serve a new page after every 10 second.
//   };
// };

export default HomePage;