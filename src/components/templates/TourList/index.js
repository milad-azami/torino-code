function TourList({ toursData }) {
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
