import Head from "next/head";
import { PointOfInterest } from "@/components/point-of-interest";
import { ReactionComponent } from "@/components/reaction-component";

export default function Home() {
  const handleOnClick = () => {};

  return (
    <>
      <Head>
        <title>Crew3 Test Steve Brown</title>
        <meta name="description" content="Crew 3 Test" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="pt-12">
        <div className="container mx-auto flex items-center justify-center h-full p-4">
          <div>
            <h1 className="text-4xl text-center mb-4">Crew3 Test</h1>
            <PointOfInterest onClick={handleOnClick} />
            <ReactionComponent />
          </div>
        </div>
      </main>
    </>
  );
}
