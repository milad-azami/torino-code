"use client";

import { Controller, useForm } from "react-hook-form";
import { DatePicker } from "zaman";

function SearchFrom() {
  const { register, handleSubmit, control } = useForm();

  const submitHandler = (data) => {
    console.log(data);
  };

  return (
    <form
      className="bg-green-100 flex gap-5 p-5 w-fit m-auto"
      onSubmit={handleSubmit(submitHandler)}
    >
      <select {...register("originId")}>
        <option value="1">تهران</option>
        <option value="2">سنندج</option>
      </select>
      <select {...register("destinationId")}>
        <option value="1">تهران</option>
        <option value="2">سنندج</option>
      </select>
      <Controller
        control={control}
        name="date"
        render={({ field: { onChange } }) => (
          <DatePicker
            round="x2"
            accentColor="#28A745"
            onChange={(e) => onChange({ startDate: e.from, endDate: e.to })}
            range
          />
        )}
      />
      <input
        type="submit"
        className="!bg-green-500 text-xs p-2 text-white !border-0"
      />
    </form>
  );
}

export default SearchFrom;
