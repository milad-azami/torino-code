function TourList({ toursData }) {
  if (!toursData.length) return <p>نتیجه ای یافت نشد</p>;

  return (
    <main>
      {toursData?.map((tour) => (
        <section key={tour.id}>
          <h2>{tour?.title}</h2>
        </section>
      ))}
    </main>
  );
}

export default TourList;
