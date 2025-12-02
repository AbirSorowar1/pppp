import Header from "./components/Header";
import Notes from "./components/Notes";
import pic from "./pic.jpg";

function App() {
  return (
    <div className="relative w-full h-screen">
      <img
        src={pic}
        alt="banner"
        className="w-full h-full object-cover brightness-75"
      />

      <div className="absolute inset-0 flex flex-col justify-center items-center gap-10 px-6 backdrop-blur-sm">
        <Header />
        <Notes />
      </div>
    </div>
  );
}

export default App;
