import Header from '../components/Header';

export default function Home() {
    return (
      <div className="min-h-screen bg-gray-900 text-white">
        <header className="flex justify-between items-center p-4">
          <h1 className="text-4xl font-bold">Josh Warren</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#about" className="hover:underline">About</a></li>
              <li><a href="#posts" className="hover:underline">Posts</a></li>
              <li><a href="#contact" className="hover:underline">Contact</a></li>
            </ul>
          </nav>
        </header>
        <main className="p-8">
          <section id="about" className="mt-10">
            <h2 className="text-3xl font-bold">About Me</h2>
            <p className="mt-4">Hi! I'm Rou Zhen, a full stack engineer with a passion for creating engaging user interfaces and user experiences.</p>
          </section>
        </main>
      </div>
    );
  }
  