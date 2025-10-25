export default function Header() {
  return (
    <header className="bg-blue-700 text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <h1 className="text-2xl font-bold">Evy Networks</h1>
        <nav className="space-x-4 space-x-reverse">
          <a href="#" className="hover:text-blue-200">דף הבית</a>
          <a href="#services" className="hover:text-blue-200">שירותים</a>
          <a href="#contact" className="hover:text-blue-200">צור קשר</a>
        </nav>
      </div>
    </header>
  );
}
