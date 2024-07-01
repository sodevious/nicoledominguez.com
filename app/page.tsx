import Image from "next/image";
import Intro from "./components/Intro";
import Logo from "./components/Logo";

type Project = {
  _id: string
  title?: string
  slug?: {
    current: string
  }
}

export default async function Home() {
  const projects = await client.fetch<Project[]>(`*[_type == "project"]`)

  return (
    <main className="min-h-screen flex flex-col max-w-[52rem] px-8 mx-auto py-24 gap-14">
      <header className="flex items-center justify-center w-100">
        <Logo className="w-64 h-auto" />
      </header>

      <section>
        <div className="flex items-center justify-around gap-8">
          {/* <img src="https://nicoledominguez.com/assets/images/nicole-dominguez-2018.jpg" className="object-cover w-1/6 rounded-full shadow-sm aspect-square" alt="Nicole Dominguez" /> */}
          <div>
            <h2 className="mb-2 text-3xl font-bold">
              UX Engineer
            </h2>
            <p className="mb-4 text-lg">
              I am a problem solver who builds things for the web and the people who use it &mdash; with more than 14 years of professional experience. 
              Much of my time is spent at the intersection of design and development, where I work to create engaging and intuitive user experiences.
            </p>

            <a href="/" className="px-3 py-2 mr-6 font-semibold bg-purple text-vanilla ">Get in Touch</a>
            <a href="/" className="font-semibold">Learn More</a>
          </div>
        </div>
      </section>

      <section>
        <h3 className="mb-3 text-2xl font-semibold">Selected Work</h3>

      </section>
    </main>
  );
}
