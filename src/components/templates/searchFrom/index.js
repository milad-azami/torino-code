"use client";

import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { DatePicker } from "zaman";
import QueryString from "qs";

import { useGetTours } from "@/core/services/queries";
import { DateToIso, flattenObject } from "@/core/utils/helper";
import { useRouter } from "next/navigation";
import useQuery from "@/core/hooks/query";

function SearchFrom() {
  const [query, setQuery] = useState("");

  const router = useRouter();
  const { getQuery } = useQuery();
  const { data, isPending, refetch } = useGetTours(query);
  const { register, handleSubmit, control, reset } = useForm();

  // useEffect(() => {
  //   refetch();
  // }, [query]);

  useEffect(() => {
    const originId = getQuery("originId");
    const destinationId = getQuery("destinationId");
    if (originId && destinationId) reset({originId, destinationId})
    console.log({ originId, destinationId });
  }, []);

  const submitHandler = (form) => {
    // setQuery(flattenObject(form));
    const query = QueryString.stringify(flattenObject(form));
    router.push(`/?${query}`);
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
            onChange={(e) =>
              onChange({
                startDate: DateToIso(e.from),
                endDate: DateToIso(e.to),
              })
            }
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
