"use client";

import { useState } from "react";
import SendOTPForm from "./SendOTPForm";
import CheckOTPForm from "./CheckOTPForm";
import ModalContainer from "@/components/partials/container/ModalContainer";
import { useGetUserData } from "@/core/services/queries";
import Link from "next/link";

function AuthForm() {
  const [step, setStep] = useState(1);
  const [mobile, setMobile] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const { data } = useGetUserData();


  if (data?.data) return <Link href="/profile">ورود به حساب کاربری</Link>;

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>ورود</button>
      {step === 1 && (
        <ModalContainer setIsOpen={setIsOpen} isOpen={isOpen}>
          <SendOTPForm
            mobile={mobile}
            setMobile={setMobile}
            setStep={setStep}
          />
        </ModalContainer>
      )}
      {step === 2 && (
        <ModalContainer setIsOpen={setIsOpen} isOpen={isOpen}>
          <CheckOTPForm
            mobile={mobile}
            setStep={setStep}
            setIsOpen={setIsOpen}
          />
        </ModalContainer>
      )}
    </div>
  );
}

export default AuthForm;
