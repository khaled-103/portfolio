import { LanguagesKeysType } from "@/lib/types";

export default function ContactMe({ lang }: { lang: LanguagesKeysType }) {
  return (
    <section className="my-8">
      <h2 className="text-2xl font-bold dark:text-white">{lang === "ar" ? "اتصل بي" : "Contact Me"}</h2>
      <form className="mt-4">
        <input
          type="text"
          placeholder={lang === "ar" ? "الاسم" : "Name"}
          className="w-full p-2 mb-4 border rounded dark:bg-gray-800 dark:text-white"
        />
        <input
          type="email"
          placeholder={lang === "ar" ? "البريد الإلكتروني" : "Email"}
          className="w-full p-2 mb-4 border rounded dark:bg-gray-800 dark:text-white"
        />
        <textarea
          placeholder={lang === "ar" ? "رسالتك" : "Your Message"}
          className="w-full p-2 mb-4 border rounded dark:bg-gray-800 dark:text-white"
        />
        <button
          type="submit"
          className="px-4 py-2 text-white bg-blue-500 rounded dark:bg-blue-700"
        >
          {lang === "ar" ? "إرسال" : "Send"}
        </button>
      </form>
    </section>
  );
}
