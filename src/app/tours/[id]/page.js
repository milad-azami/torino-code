import { serverFetch } from "@/core/services/http";

async function TourDetailsPage({ params }) {
  const tourData = await serverFetch(`tour/${params.id}`, null, {
    cache: "no-store",
  });

  console.log(tourData);

  return (
    <div>
      <h1>{tourData.title}</h1>
    </div>
  );
}

export default TourDetailsPage;
