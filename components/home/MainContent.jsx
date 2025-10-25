export default function MainContent() {
  return (
    <section className="text-center space-y-10">
      <h2 className="text-4xl font-bold text-blue-700">
        פתרונות תקשורת אמינים לבתים ולבניינים
      </h2>
      <p className="text-lg text-gray-700 max-w-2xl mx-auto">
        ב־Evy Networks אנו מספקים התקנה, תחזוקה ואיתור תקלות של מערכות תקשורת וכבלים.
        עם ניסיון עשיר בעבודה בבניינים, משרדים ובתים פרטיים – אנו מבטיחים חיבור מהיר, יציב ובטוח.
      </p>

      <div id="services" className="mt-12 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="bg-white shadow-md p-6 rounded-2xl">
          <h3 className="font-semibold text-xl mb-2 text-blue-700">רשתות ביתיות</h3>
          <p>התקנה ואופטימיזציה של רשת אינטרנט, Wi-Fi ומכשירים חכמים בבית.</p>
        </div>
        <div className="bg-white shadow-md p-6 rounded-2xl">
          <h3 className="font-semibold text-xl mb-2 text-blue-700">תשתיות בניינים</h3>
          <p>תכנון ופריסת תשתיות תקשורת מקצועיות במשרדים ובבנייני מגורים.</p>
        </div>
        <div className="bg-white shadow-md p-6 rounded-2xl">
          <h3 className="font-semibold text-xl mb-2 text-blue-700">איתור ותיקון תקלות</h3>
          <p>בדיקות, אבחון ופתרון מהיר של בעיות תקשורת וכבלים.</p>
        </div>
      </div>
    </section>
  );
}
