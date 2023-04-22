import { SignOutButton, useUser } from "@clerk/nextjs";
import { type NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Home: NextPage = () => {
  const { isLoaded, isSignedIn, user } = useUser();
  const { push } = useRouter();

  useEffect(() => {
    if (!isSignedIn) push("/sign-in");
  });

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 text-white ">
          <h1>Main page</h1>
          {isSignedIn && <h3>Welcome back, {user.firstName}</h3>}
          {isSignedIn && <SignOutButton />}
        </div>
      </main>
    </>
  );
};

export default Home;
