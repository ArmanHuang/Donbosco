import { ourCentersData } from "@/data/ourCenters";

export async function GET(
  request: Request,
  context: { params: Promise<{ country?: string }> }
) {
  try {
    // ✅ unwrap params (WAJIB di Next.js baru)
    const { country: rawCountry } = await context.params;

    console.log("🔥 CENTERS API HIT");

    const country = rawCountry?.toLowerCase().trim();

    console.log("RAW:", rawCountry);
    console.log("NORMALIZED:", country);
    console.log("AVAILABLE:", Object.keys(ourCentersData));

    // ❌ kalau kosong
    if (!country) {
      return new Response(
        JSON.stringify({ message: "Invalid country" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // 🔍 ambil data
    const data = ourCentersData?.[country];

    // ❌ kalau tidak ketemu
    if (!data) {
      return new Response(
        JSON.stringify({
          message: "Country not found",
          requested: country,
          available: Object.keys(ourCentersData),
        }),
        { status: 404, headers: { "Content-Type": "application/json" } }
      );
    }

    // ✅ sukses
    return new Response(JSON.stringify(data), {
      headers: { "Content-Type": "application/json" },
    });

  } catch (error) {
    console.error("CENTERS API ERROR:", error);

    return new Response(
      JSON.stringify({ message: "Internal Server Error" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}