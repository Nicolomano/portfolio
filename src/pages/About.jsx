import * as aboutEs from "../data/about.js";
import * as aboutEn from "../data/about.en.js";
import Cta from "../components/Cta";
import Reveal from "../components/Reveal";
import SectionHeader from "../components/SectionHeader";
import SpecList from "../components/SpecList";
import usePageMeta from "../hooks/usePageMeta";
import { useI18n } from "../i18n/index.js";
import { pad } from "../lib/projects.js";

const content = { es: aboutEs, en: aboutEn };

export default function About() {
  const { lang, t, path: routes } = useI18n();
  const text = t.about;
  const { availability, education, languages, path } = content[lang];
  usePageMeta(text.metaTitle, text.metaDescription);

  return (
    <>
      <header className="grid gap-8 border-b border-ink py-10 lg:grid-cols-12 lg:py-16">
        <p className="label text-ink-soft lg:col-span-12">{text.eyebrow}</p>
        <h1 className="text-6xl leading-[0.9] font-black tracking-[-0.045em] sm:text-8xl lg:col-span-12 lg:text-[9rem]">
          {text.title}
        </h1>
        <p className="max-w-xl text-lg leading-relaxed text-ink-soft lg:col-span-6 lg:col-start-7">
          {text.intro}
        </p>
      </header>

      <section aria-labelledby="recorrido" className="mt-16">
        <SectionHeader number="01" title={text.path} id="recorrido" />
        <ol className="mt-6">
          {path.map((step, i) => (
            <Reveal
              as="li"
              key={step.title}
              className="grid gap-2 border-b border-rule py-6 md:grid-cols-12 md:gap-6"
            >
              <p className="label text-ink-soft md:col-span-3">
                <span className="mr-3 text-accent-ink">{pad(i + 1)}</span>
                {step.period}
              </p>
              <div className="md:col-span-9">
                <h3 className="text-2xl font-extrabold tracking-tight sm:text-3xl">{step.title}</h3>
                <p className="label mt-1">{step.place}</p>
                <p className="mt-3 max-w-prose leading-relaxed">{step.text}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </section>

      <section aria-labelledby="formacion" className="mt-20">
        <SectionHeader number="02" title={text.education} id="formacion" />
        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[22rem] text-left">
            <thead className="label text-ink-soft">
              <tr className="border-b border-ink">
                <th scope="col" className="py-3 pr-4 font-normal">{text.table.school}</th>
                <th scope="col" className="py-3 pr-4 font-normal">{text.table.program}</th>
                <th scope="col" className="py-3 text-right font-normal">{text.table.year}</th>
              </tr>
            </thead>
            <tbody>
              {education.map((item) => (
                <tr key={`${item.school}-${item.program}`} className="border-b border-rule">
                  <td className="label py-4 pr-4 align-baseline">{item.school}</td>
                  <td className="py-4 pr-4 text-lg font-bold tracking-tight">{item.program}</td>
                  <td className="label py-4 text-right align-baseline">{item.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <div className="mt-20 grid gap-16 lg:grid-cols-2 lg:gap-12">
        <section aria-labelledby="idiomas">
          <SectionHeader number="03" title={text.languages} id="idiomas" />
          <SpecList items={languages} className="mt-6" />
        </section>
        <section aria-labelledby="disponibilidad">
          <SectionHeader number="04" title={text.availability} id="disponibilidad" />
          <SpecList items={availability} className="mt-6" />
          <div className="mt-8">
            <Cta to={routes.contact}>
              {text.contactMe} <span aria-hidden="true">→</span>
            </Cta>
          </div>
        </section>
      </div>
    </>
  );
}
