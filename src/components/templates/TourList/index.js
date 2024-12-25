import Link from "next/link";

function TourList({ toursData }) {
  if (!toursData.length) return <p>نتیجه ای یافت نشد</p>;

  return (
    <main>
      {toursData?.map((tour) => (
        <section key={tour.id} className="border rounded-sm m-4">
          <h2>{tour?.title}</h2>
          <Link href={`/tours/${tour?.id}`} className="bg-blue-500 text-white">رزرو</Link>
        </section>
      ))}
    </main>
  );
}

export default TourList;
