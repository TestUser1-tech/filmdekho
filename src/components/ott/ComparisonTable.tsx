import type { OTTPlatform } from "@/lib/types";

export function ComparisonTable({ platforms }: { platforms: OTTPlatform[] }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-zinc-800">
      <table className="w-full min-w-[640px] text-left text-sm">
        <thead>
          <tr className="border-b border-zinc-800 bg-zinc-900/80">
            <th className="p-3 font-semibold text-zinc-200">Platform</th>
            <th className="p-3 font-semibold text-zinc-200">Price (indicative)</th>
            <th className="p-3 font-semibold text-zinc-200">Pros</th>
            <th className="p-3 font-semibold text-zinc-200">Cons</th>
          </tr>
        </thead>
        <tbody>
          {platforms.map((p) => (
            <tr key={p.name} className="border-b border-zinc-800/80 last:border-0">
              <td className="p-3 font-medium text-zinc-100">{p.name}</td>
              <td className="p-3 text-zinc-400">{p.price}</td>
              <td className="p-3 text-zinc-400">
                <ul className="list-inside list-disc space-y-0.5">
                  {p.pros.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </td>
              <td className="p-3 text-zinc-400">
                <ul className="list-inside list-disc space-y-0.5">
                  {p.cons.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
