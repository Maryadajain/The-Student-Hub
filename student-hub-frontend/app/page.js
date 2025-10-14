import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="p-6 text-center">
        <h2 className="text-3xl font-semibold mt-10">Welcome to The Student Hub 🎓</h2>
        <p className="mt-4 text-gray-600">
          Your all-in-one platform for academics, career & community growth!
        </p>
      </div>
    </div>
  );
}
