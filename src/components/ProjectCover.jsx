import PhoneFrame from "./PhoneFrame";
import Shot from "./Shot";
import { useI18n } from "../i18n/index.js";

// Captura principal: dentro de un celular si es la PWA privada,
// o en un marco plano de 3:2 si es una web pública.
export default function ProjectCover({ project }) {
  const { t } = useI18n();
  const alt = t.mainScreenshot(project.title);

  if (project.private) {
    return (
      <div className="border border-ink bg-paper-dark px-6 py-10">
        <PhoneFrame>
          <Shot file={project.image} alt={alt} className="h-full w-full" />
        </PhoneFrame>
      </div>
    );
  }

  return (
    <div className="border border-ink">
      <Shot file={project.image} alt={alt} className="aspect-[3/2] w-full" />
    </div>
  );
}
