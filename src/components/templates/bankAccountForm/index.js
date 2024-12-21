"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { bankAcountSchema } from "@/core/schema";

function BankAccountForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(bankAcountSchema),
  });

  const submitHandler = (data) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="*:border-2 *:border-gray-300 *:rounded-lg *:m-2 *:p-1"
    >
      <input {...register("shaba_code")} placeholder="شماره شبا" />
      {!!errors?.shaba_code && <span>{errors?.shaba_code?.message}</span>}
      <input {...register("debitCard_code")} placeholder="شماره کارت" />
      {!!errors?.debitCard_code && (
        <span>{errors?.debitCard_code?.message}</span>
      )}

      <input {...register("accountIdentifier")} placeholder="شماره حساب" />
      {!!errors?.accountIdentifier && (
        <span>{errors?.accountIdentifier?.message}</span>
      )}

      <input
        type="submit"
        className="!bg-green-500 text-xs p-2 text-white !border-0"
      />
    </form>
  );
}

export default BankAccountForm;
