import ModalContainer from "@/components/partials/container/ModalContainer";
import AuthForm from "@/components/templates/authForm";
import SearchFrom from "@/components/templates/searchFrom";

export default function Home() {
  return (
    <div>
      <p>This HomePage is completed.</p>
      <AuthForm />
      <ModalContainer />

      <SearchFrom />
    </div>
  );
}
