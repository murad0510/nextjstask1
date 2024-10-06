import { useRouter } from "next/router";

const Main = () => {
  const router = useRouter();
  const handleGoPage = (pageName) => {
    router.push(`./${pageName}`);
  };
  return (
    <div>
      <h1>Main Page</h1>
      <div className="buttons">
        <button onClick={() => handleGoPage("about")}>About</button>
        <button onClick={() => handleGoPage("account")}>Account</button>
        <button onClick={() => handleGoPage("blog")}>Blog</button>
        <button onClick={() => handleGoPage("contacts")}>Contacts</button>
      </div>
    </div>
  );
};

export default Main;
