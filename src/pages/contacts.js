import { useRouter } from "next/router";

const Contacts = () => {
  const router = useRouter();
  const handleBack = () => {
    router.back("./main");
  };
  return (
    <div>
      <h1>Contacts Page</h1>
      <div className="buttons">
        <button onClick={handleBack}>Back</button>
      </div>
    </div>
  );
};

export default Contacts;
