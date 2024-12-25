import ModalContainer from "@/components/partials/container/ModalContainer";
import AuthForm from "@/components/templates/authForm";
import SearchFrom from "@/components/templates/searchFrom";
import TourList from "@/components/templates/TourList";
import { serverFetch } from "@/core/services/http";

async function Home({ searchParams }) {
  console.log(searchParams);
  const data = await serverFetch("tour", {}, { cache: "no-store" });

  return (
    <div>
      <p>This HomePage is completed.</p>
      <AuthForm />
      <ModalContainer />
      <SearchFrom />
      <TourList toursData={data} />
    </div>
  );
}

export default Home;
