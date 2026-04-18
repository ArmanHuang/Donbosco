import { CountryProgram } from "@/types/program";
import ProgramCard from "@/components/UI/programCard"

export default function ProgramSection({ data }: { data: CountryProgram }) {
  return (
    <section className="max-w-7xl mx-auto px-6 py-10">
      <h2 className="text-3xl font-bold text-orange-500 mb-6">
        {data.country}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {data.programs.map((item, index) => (
          <ProgramCard key={index} item={item} />
        ))}
      </div>
    </section>
  );
}
