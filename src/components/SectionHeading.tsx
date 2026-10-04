export default function SectionHeading({
  kicker,
  title,
  subtitle,
}: {
  kicker: string
  title: string
  subtitle?: string
}) {
  return (
    <div className="mb-10 max-w-2xl">
      <p className="font-mono text-xs uppercase tracking-[0.25em] text-teal-300/80">{kicker}</p>
      <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-100 sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-3 text-slate-400">{subtitle}</p>}
    </div>
  )
}
