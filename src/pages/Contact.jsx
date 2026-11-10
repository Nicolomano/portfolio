import { useState } from "react";
import profile from "../data/profile.js";
import Cta from "../components/Cta";
import SpecList from "../components/SpecList";
import usePageMeta from "../hooks/usePageMeta";
import { useI18n } from "../i18n/index.js";

const linkClass =
  "underline decoration-rule underline-offset-4 transition-colors duration-150 hover:text-accent-ink hover:decoration-accent";

export default function Contact() {
  const { lang, t } = useI18n();
  const text = t.contact;
  usePageMeta(text.metaTitle, text.metaDescription);

  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Sin permiso de portapapeles: el email igual está visible en pantalla.
    }
  }

  // El CV del idioma de la página va primero, como botón principal.
  const cvs = [
    { lang: "es", label: text.cvEs },
    { lang: "en", label: text.cvEn },
  ].sort((a, b) => (a.lang === lang ? -1 : b.lang === lang ? 1 : 0));

  return (
    <>
      <header className="grid gap-6 border-b border-ink py-10 lg:grid-cols-12 lg:py-16">
        <h1 className="text-6xl leading-[0.9] font-black tracking-[-0.045em] sm:text-8xl lg:col-span-12 lg:text-[9rem]">
          {text.title}
        </h1>
        <p className="max-w-xl text-lg leading-relaxed text-ink-soft lg:col-span-6">{text.intro}</p>
      </header>

      <section aria-label="Email" className="border-b border-ink py-10 lg:py-14">
        <p className="label text-ink-soft">Email</p>
        <div className="mt-3 flex flex-wrap items-center gap-x-6 gap-y-4">
          <a
            href={`mailto:${profile.email}`}
            className="text-2xl font-extrabold tracking-tight break-all underline decoration-accent decoration-2 underline-offset-8 transition-colors duration-200 hover:text-accent-ink sm:text-4xl lg:text-5xl"
          >
            {profile.email}
          </a>
          <button
            type="button"
            onClick={copyEmail}
            className="label border border-ink px-3 py-2 transition-colors duration-200 hover:bg-ink hover:text-paper"
          >
            {copied ? text.copied : text.copy}
          </button>
          <span aria-live="polite" className="sr-only">
            {copied ? text.copiedAnnouncement : ""}
          </span>
        </div>
      </section>

      <div className="grid gap-12 py-10 lg:grid-cols-12 lg:py-14">
        <section aria-labelledby="canales" className="lg:col-span-7">
          <h2 id="canales" className="label mb-3 text-ink-soft">{text.channels}</h2>
          <SpecList
            items={[
              [
                "LinkedIn",
                <a key="li" href={profile.linkedin} target="_blank" rel="noreferrer" className={linkClass}>
                  linkedin.com/in/nicolasromano3515 ↗
                </a>,
              ],
              [
                "GitHub",
                <a key="gh" href={profile.github} target="_blank" rel="noreferrer" className={linkClass}>
                  {profile.github.replace("https://", "")} ↗
                </a>,
              ],
              [text.location, profile.location],
              [text.workMode, t.profile.availability],
            ]}
          />
        </section>

        <section aria-labelledby="cv" className="lg:col-span-5">
          <h2 id="cv" className="label mb-3 text-ink-soft">{text.resume}</h2>
          <div className="flex flex-col items-start gap-3 border-t border-ink pt-6">
            {cvs.map((cv, i) => (
              <Cta
                key={cv.lang}
                href={profile.cv[cv.lang]}
                variant={i === 0 ? "primary" : "secondary"}
                hrefLang={cv.lang}
                download
              >
                {cv.label}{" "}
                <span className={i === 0 ? "opacity-70" : "text-ink-soft"}>(PDF)</span>
              </Cta>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
