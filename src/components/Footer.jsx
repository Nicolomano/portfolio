import profile from "../data/profile.js";

const linkClass = "transition-colors duration-150 hover:text-accent-ink";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-ink">
      <div className="shell label grid gap-3 py-6 md:grid-cols-12">
        <p className="md:col-span-4">© {year} {profile.name}</p>
        <p className="text-ink-soft md:col-span-3">{profile.location}</p>
        <ul className="flex flex-wrap gap-x-6 gap-y-2 md:col-span-5 md:justify-end">
          <li>
            <a href={`mailto:${profile.email}`} className={linkClass}>
              Email
            </a>
          </li>
          <li>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className={linkClass}>
              LinkedIn ↗
            </a>
          </li>
          {profile.github && (
            <li>
              <a href={profile.github} target="_blank" rel="noreferrer" className={linkClass}>
                GitHub ↗
              </a>
            </li>
          )}
        </ul>
      </div>
    </footer>
  );
}
