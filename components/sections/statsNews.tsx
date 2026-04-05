import { StatsItem } from "@/types/statsItem"
import { CountUp } from "../UI/countUp";

type Props = {
  data: StatsItem[];
};

export default function StatsSection({ data }: Props) {
  return (
    <div className="relative z-10 bg-gray-200 -mt-15">
<section className="max-w-7xl mx-auto flex justify-center bg-white text-black py-12 px-6 rounded-2xl shadow-lg ">
  <div className="flex flex-1 justify-between gap-8">
    
    {data.map((item, index) => (
      <div key={index} className="flex items-center gap-4 flex-1">
        
        <div className="hidden md:flex">
          <img
            src={item.image}
            alt=""
            className="h-[60px] w-[60px] object-contain"
          />
        </div>

        <div className="flex flex-col">
          <p className="text-2xl md:text-3xl font-bold">
          <CountUp end={Number(item.value)} />
          </p>

          <p className="text-sm md:text-base text-gray-600">
            {item.label}
          </p>
        </div>

      </div>
    ))}

  </div>
</section>

</div>

  );
}