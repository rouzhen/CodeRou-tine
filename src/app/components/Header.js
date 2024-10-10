export default function Header() {
    return (
      <header className="flex justify-between items-center p-4">
        <h1 className="text-4xl font-bold">CodeRou-tine</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#about" className="hover:underline">About</a></li>
            <li><a href="#posts" className="hover:underline">Posts</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </nav>
      </header>
    );
  }
  