import { object, string } from "yup";

const bankAcountSchema = object({
  shaba_code: string().required("شماره شبارا وارد کنید"),
  debitCard_code: string().length(16, "شماره کارت باید ۱۶ عدد باشد").required(),
  accountIdentifier: string()
    .min(8, "باید حداقل ۸ کاراکتر باشد")
    .max(16)
    .required(),
});

export { bankAcountSchema };
