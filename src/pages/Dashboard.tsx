import { useRef } from "react";

const Dashboard = () => {
  const fileInputRef = useRef<any>(null);

  const handleFileSubmit = async (e: any) => {
    e.preventDefault();
    const files = fileInputRef.current.files;
    if (files.length > 0) {
      const formData = new FormData();
      for (let i = 0; i < files.length; i++) {
        formData.append("files", files[i]);
        try {
          const response = await fetch("http://localhost:3030/upload", {
            method: "POST",
            body: formData,
          });

          const data = await response.json();

          console.log(`uploaded files: ${data}`);
        } catch (error: any) {
          console.log(error.message);
        }
      }
    }
  };

  return (
    <main>
      <form>
        <h3>Upload a book</h3>
        <input
          type="file"
          id="file"
          required
          multiple
          name="file"
          ref={fileInputRef}
        />

        <input
          type="submit"
          onClick={handleFileSubmit}
        />
      </form>
    </main>
  );
};

export default Dashboard;
