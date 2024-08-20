import Card from "./components/Card";
import Form from "./components/Form";

export default function App() {
  return (
    <>
      <div className="container mx-auto min-h-screen flex flex-col justify-center">
        <div className="grid grid-cols-2 items-center gap-16">
          <Card />
          <Form />
        </div>
      </div>
    </>
  );
}
