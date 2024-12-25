"use client";

import useQuery from "@/core/hooks/query";
import Link from "next/link";
import { useEffect } from "react";

function PaymentPage() {
  const { getQuery } = useQuery();

  const status = getQuery("status");

  if (status === "success")
    return (
      <div>
        <p>پرداخت شما با موفقیت انجام شد</p>
        <Link href="/profile/my-tours">برو به پروفایل</Link>
      </div>
    );

  return (
    <div>
      <p>پرداخت انجام نشد</p>
    </div>
  );
}

export default PaymentPage;
