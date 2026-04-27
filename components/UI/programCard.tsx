import { ProgramItem } from "@/types/program";

export default function ProgramCard({ item }: { item: ProgramItem }) {
  return (
    <div className="border rounded-xl p-4 shadow-sm">
      <img
        src={item.image}
        className="w-full h-72 object-cover rounded-lg mb-4"
      />

      <h3 className="text-[#F59E0B] font-bold text-lg mb-2">
        {item.title}
      </h3>

      <p className="text-sm text-gray-600 mb-3">
        {item.description}
      </p>

      <p className="font-semibold text-[#F59E0B]">Schools</p>

      <ul className="list-disc ml-5 text-sm text-gray-600">
        {item.schools.map((school) => (
          <li key={school}>{school}</li>
        ))}
      </ul>
    </div>
  );
}