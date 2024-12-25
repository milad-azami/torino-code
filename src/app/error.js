"use client";

function Error({ reset }) {
  return (
    <div>
      <p>مشکلی پیش امده است</p>
      <button onClick={() => reset()}>تلاش مجدد</button>
    </div>
  );
}

export default Error;
