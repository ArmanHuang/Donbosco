import { ProgramItem } from "@/types/program";

export default function ProgramCard({ item }: { item: ProgramItem }) {
  return (
    <div className="border rounded-xl p-4 shadow-sm">
      <img
        src={item.image}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />

      <h3 className="text-orange-500 font-bold text-lg mb-2">
        {item.title}
      </h3>

      <p className="text-sm text-gray-600 mb-3">
        {item.description}
      </p>

      <p className="font-semibold text-orange-500">School</p>
      <ul className="list-disc ml-5 text-sm">
        {item.schools.map((school, i) => (
          <li key={i}>{school}</li>
        ))}
      </ul>
    </div>
  );
}
