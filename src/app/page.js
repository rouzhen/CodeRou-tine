import Navbar from './components/NavBar.js'; 

export default function Home() {
  return (
    <div className="font-silkscreen min-h-screen bg-gray-900 text-white tracking-normal sm: px-2, md: px-2, lg:px-2, xl:px-8">
      <header className="flex justify-center items-center p-4">
        <Navbar /> {/* Replace the nav element with the Navbar component */}
      </header>


      <div className="flex justify-center items-center"> 
        <h2 className="font-raleway text-sm"> Click on the space bar to start playing </h2>
      </div>
      <main className="p-2">
        {/* Game content (moved above the heading) */}
        <div className="w-full max-w-4xl  bg-black p-8 border border-gray-700 rounded-lg mx-auto">
          <iframe
            src="https://dinosaurgame.app/"
            className="w-full h-96"
            title="Game"
          ></iframe>
        </div>

        {/* Heading Section */}
        <h1 className="text-5xl font-light leading-tight text-center py-6 ">
          Koo Rou Zhen
        </h1>

        {/* About Section */}
        <section id="about" className="mt-6">
          <h2 className="font-raleway mt-4 text-xl font-semibold text-slate-300">
            Hi! I'm
            <span className="underline underline-offset-2 decoration-sky-500 text-white">
              {" "}Rou Zhen
            </span>, a full stack engineer with a passion for creating engaging user interfaces and user experiences.
          </h2>
        </section>
      </main>
    </div>
  );
}
