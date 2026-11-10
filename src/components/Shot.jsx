import { useState } from "react";
import { useI18n } from "../i18n/index.js";

// Muestra una imagen de public/img/ (o un video de public/video/).
// Si el archivo no existe, muestra un placeholder rayado con la ruta esperada,
// así se ve a simple vista qué captura falta.
export default function Shot({ file, alt, video = false, className = "" }) {
  const { t } = useI18n();
  // Guardamos qué archivo falló: si cambia `file`, se vuelve a intentar.
  const [failedFile, setFailedFile] = useState(null);
  const path = `${video ? "video" : "img"}/${file}`;

  if (!file || failedFile === file) {
    return (
      <div
        role="img"
        aria-label={`${t.missingFile}: ${alt}`}
        className={`stripes flex items-center justify-center p-3 ${className}`}
      >
        <span className="label border border-ink bg-paper px-2 py-1 text-center break-all">
          {file ? path : t.noFile}
        </span>
      </div>
    );
  }

  if (video) {
    return (
      <video
        src={`/${path}`}
        aria-label={alt}
        className={`object-cover ${className}`}
        controls
        muted
        playsInline
        preload="metadata"
        onError={() => setFailedFile(file)}
      />
    );
  }

  return (
    <img
      src={`/${path}`}
      alt={alt}
      loading="lazy"
      className={`object-cover object-top ${className}`}
      onError={() => setFailedFile(file)}
    />
  );
}
