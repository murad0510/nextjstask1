import { useRouter } from "next/router";

const Blog = () => {
  const router = useRouter();
  const handleBack = () => {
    router.back("./main");
  };
  return (
    <div>
      <h1>Blog Page</h1>
      <div className="buttons">
        <button onClick={handleBack}>Back</button>
      </div>
    </div>
  );
};

export default Blog;
