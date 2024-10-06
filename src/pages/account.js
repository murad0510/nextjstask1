import { useRouter } from "next/router";

const Account = () => {
  const router = useRouter();
  const handleBack = () => {
    router.back("./main");
  };
  return (
    <div>
      <h1>Account Page</h1>
      <div className="buttons">
        <button onClick={handleBack}>Back</button>
      </div>
    </div>
  );
};

export default Account;
