import SectionHeading from '../components/SectionHeading'
import { profile } from '../data/profile'

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-20">
      <SectionHeading kicker="Who I am" title="About Me" />
      <div className="grid gap-8 md:grid-cols-3">
        <div className="space-y-4 text-slate-400 md:col-span-2">
          <p>{profile.bio}</p>
          <p>
            I'm most interested in web and backend development, mobile development, system
            development, and IoT/embedded projects. Through HMSE I also help plan curricula, run
            technical training, and support project development and technology events.
          </p>
          <p>
            My approach is simple: learn by building real systems, troubleshoot real problems, and
            share what I learn with others.
          </p>
        </div>
        <dl className="rounded-xl border border-white/5 bg-ink-900/60 p-6 font-mono text-sm">
          <div className="py-2">
            <dt className="text-slate-500">Location</dt>
            <dd className="text-slate-200">{profile.location}</dd>
          </div>
          <div className="py-2">
            <dt className="text-slate-500">Focus</dt>
            <dd className="text-slate-200">Web · Backend · Mobile · IoT</dd>
          </div>
          <div className="py-2">
            <dt className="text-slate-500">Role</dt>
            <dd className="text-slate-200">Kadiv Litbang HMSE</dd>
          </div>
        </dl>
      </div>
    </section>
  )
}
