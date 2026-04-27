import ProgramCard from "@/components/UI/programCard";

export default function ProgramSection({ data }: any) {
  if (!data || !data.programs) return null;

  return (
    <section className="px-6 md:px-20 py-12">
      <h2 className="text-3xl font-bold text-[#F59E0B] mb-6 text-center">
        {data.country}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {data.programs.map((item: any) => (
          <ProgramCard key={item.title} item={item} />
        ))}
      </div>
    </section>
  );
 }