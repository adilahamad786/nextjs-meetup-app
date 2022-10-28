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

export async function getStaticPaths() {
  return {
    fallback : false, // that means we define all static paths id inside the path array if path id not match inside the given paths array then simply give a 404 page bydefault, if we put as 'true' then we simple say if come any page id which are not contain in paths array then this render automatically according page.
    paths : [ // defiend all dynamic paths id hear..
      {
        params : {
          meetupId : 'a1'
        }
      },
      {
        params : {
          meetupId : 'a2'
        }
      }
    ]
  };
};

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId; // fetching meetupId form url params.

  // fetching meetups data for particular meetup (single meetup).

  return {
    props : {
      meetups : {
        id : meetupId,
        image : "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1024px-Stadtbild_M%C3%BCnchen.jpg",
        title : "A First Meetup",
        address : "Some street 5, some city",
        description : "The meetup description."
      }
    }
  };
};

export default MeetupDetailsPage;
