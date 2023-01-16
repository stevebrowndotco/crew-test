import Head from "next/head";
import { PointOfInterest } from "@/components/point-of-interest";

export default function Home() {
  const handleOnClick = () => {
    alert("test");
  };

  return (
    <>
      <Head>
        <title>Crew3 Test Steve Brown</title>
        <meta name="description" content="Crew 3 Test" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="pt-12">
        <div className="container mx-auto">
          <h1 className="text-4xl text-center mb-4">Crew3 Test</h1>
          <PointOfInterest onClick={handleOnClick} />
        </div>
      </main>
    </>
  );
}
