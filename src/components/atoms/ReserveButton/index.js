"use client";

import { useAddToBasket } from "@/core/services/mutations";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

function ReserveButton({ id }) {
  const { mutate, isPending } = useAddToBasket();
  const router = useRouter();

  const cartHandler = () => {
    if (isPending) return;

    mutate(id, {
      onSuccess: (data) => {
        toast.success(data.data.message);
        router.push("/checkout");
      },
      onError: (error) => {
        console.log(error);
      },
    });
  };

  return (
    <div>
      <button
        onClick={cartHandler}
        className="bg-green-500 rounded-lg text-white m-10 p-2 font-semibold"
      >
        خرید و ثبت نام در تور
      </button>
    </div>
  );
}

export default ReserveButton;
