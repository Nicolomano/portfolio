import { availability, education, languages, path } from "../data/about.js";
import Cta from "../components/Cta";
import Reveal from "../components/Reveal";
import SectionHeader from "../components/SectionHeader";
import SpecList from "../components/SpecList";
import usePageMeta from "../hooks/usePageMeta";
import { pad } from "../lib/projects.js";

export default function About() {
  usePageMeta(
    "Sobre mí · Nicolás Romano",
    "De operario CNC a desarrollador full-stack: recorrido, formación (UTN, Digital House, Coderhouse) y disponibilidad.",
  );

  return (
    <>
      <header className="grid gap-8 border-b border-ink py-10 lg:grid-cols-12 lg:py-16">
        <p className="label text-ink-soft lg:col-span-12">Sobre mí / Perfil</p>
        <h1 className="text-6xl leading-[0.9] font-black tracking-[-0.045em] sm:text-8xl lg:col-span-12 lg:text-[9rem]">
          Sobre mí
        </h1>
        <p className="max-w-xl text-lg leading-relaxed text-ink-soft lg:col-span-6 lg:col-start-7">
          Aprendí a programar resolviendo problemas del negocio donde trabajo. Desde 2021 estoy
          en atención al cliente en A&amp;P Refrigeración, y ahí vi los problemas de cerca:
          consultas repetidas por WhatsApp, técnicos que no encontraban un repuesto porque el
          sistema lo tenía abreviado, stock que solo se podía revisar desde una computadora.
          Antes fui operario CNC.
        </p>
      </header>

      <section aria-labelledby="recorrido" className="mt-16">
        <SectionHeader number="01" title="Recorrido" id="recorrido" />
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
        <SectionHeader number="02" title="Formación" id="formacion" />
        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[22rem] text-left">
            <thead className="label text-ink-soft">
              <tr className="border-b border-ink">
                <th scope="col" className="py-3 pr-4 font-normal">Institución</th>
                <th scope="col" className="py-3 pr-4 font-normal">Programa</th>
                <th scope="col" className="py-3 text-right font-normal">Año</th>
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
          <SectionHeader number="03" title="Idiomas" id="idiomas" />
          <SpecList items={languages} className="mt-6" />
        </section>
        <section aria-labelledby="disponibilidad">
          <SectionHeader number="04" title="Disponibilidad" id="disponibilidad" />
          <SpecList items={availability} className="mt-6" />
          <div className="mt-8">
            <Cta to="/contacto">
              Contactarme <span aria-hidden="true">→</span>
            </Cta>
          </div>
        </section>
      </div>
    </>
  );
}
