export default function Footer() {
  return (
    <footer className="bg-blue-700 text-white text-center py-6 mt-12">
      <p>&copy; {new Date().getFullYear()} Evy Networks. כל הזכויות שמורות.</p>
      <p className="text-sm mt-1">
        שירותי תקשורת, כבלים ורשתות לבתים ולבניינים
      </p>
    </footer>
  );
}
