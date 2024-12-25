import ReserveButton from "@/components/atoms/ReserveButton";
import { serverFetch } from "@/core/services/http";

async function TourDetailsPage({ params }) {
  const tourData = await serverFetch(`tour/${params.id}`, null, {
    cache: "no-store",
  });

  return (
    <div>
      <h1>{tourData.title}</h1>
      <ReserveButton id={params.id} />
    </div>
  );
}

export default TourDetailsPage;
