import AuthProvider from "@/components/partials/provider/AuthProvider";
import Link from "next/link";

export default function ProfileLayout({ children }) {
  return (
    <AuthProvider>
      <div className="p-10 grid grid-cols-4 gap-6">
        <ul className="border border-slate-200 divide-y  rounded-md col-span-1">
          <li className="p-2">
            <Link href="/profile">پروفایل من</Link>
          </li>
          <li className="p-2">
            <Link href="/profile/my-tours">تور ها من</Link>
          </li>
          <li className="p-2">
            <Link href="/profile/transactions">تراکنش ها</Link>
          </li>
        </ul>
        <main className="bg-red-100 col-span-3">{children}</main>
      </div>
    </AuthProvider>
  );
}
