import Header from './components/Header.js';
import Icon from './components/gearicon.js'; // Import your icon component
import NavItem from './components/NavItem.js'; 

export default function Home() {
  return (
    <div className="font-silkscreen min-h-screen bg-gray-900 text-white tracking-normal sm: px-2, md: px-2, lg:px-2, xl:px-8">
      <header className="flex justify-center items-center p-8">
        <nav>
          <ul className="flex space-x-6">
            <NavItem href="/home">Home</NavItem>
            <NavItem href="/posts">Posts</NavItem>
            <NavItem href="/about">About</NavItem>
            <li><Icon href="#settings" > Icon </Icon></li>
          </ul>
        </nav>
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
        <h1 className="text-5xl font-light leading-tight text-center p-4 ">
          Koo Rou Zhen
        </h1>

        {/* About Section */}
        <section id="about" className="mt-10">
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
