"use client";

import { useCheckout } from "@/core/services/mutations";
import { useGetBasket } from "@/core/services/queries";
import Link from "next/link";
import { useRouter } from "next/navigation";

function CheckOutPage() {
  const { data, isPending } = useGetBasket();
  const { mutate } = useCheckout();
  const router = useRouter();

  const checkoutHandler = () => {
    const data = {
      nationalCode: "3720878654",
      fullName: "John Doe",
      gender: "male",
      birthDate: "2022-10-10",
    };

    mutate(data, {
      onSuccess: (data) => {
        console.log(data);
        router.push("/payment?status=success");
      },
    });
  };

  if (!data) return <div>
    <p>سبد خرید شما خالی است</p>
    <Link href="/">برو به صفحه اصلی</Link>
  </div>

  return (
    <div className="*:bg-red-100 flex gap-10">
      <p>{data?.data?.title}</p>
      <p>{data?.data?.price}</p>
      <button onClick={checkoutHandler}>پرداخت</button>
    </div>
  );
}

export default CheckOutPage;
