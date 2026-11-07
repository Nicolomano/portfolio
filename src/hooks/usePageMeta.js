import { useEffect } from "react";

// Actualiza el <title> y la meta description al entrar a cada página.
export default function usePageMeta(title, description) {
  useEffect(() => {
    document.title = title;
    if (description) {
      document
        .querySelector('meta[name="description"]')
        ?.setAttribute("content", description);
    }
  }, [title, description]);
}
