import { programsData } from "@/data/program";

export async function GET(
  request: Request,
  context: { params: Promise<{ country?: string }> }
) {
  try {
    const { country: rawCountry } = await context.params;

    console.log("🔥 HIT API");
    console.log("RAW:", rawCountry);

    const country = rawCountry?.toLowerCase().trim();

    console.log("NORMALIZED:", country);
    console.log("AVAILABLE:", Object.keys(programsData));

    if (!country) {
      return new Response(
        JSON.stringify({ message: "Invalid country" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const data = programsData?.[country];

    if (!data) {
      return new Response(
        JSON.stringify({
          message: "Country not found",
          requested: country,
        }),
        { status: 404, headers: { "Content-Type": "application/json" } }
      );
    }

    return new Response(JSON.stringify(data), {
      headers: { "Content-Type": "application/json" },
    });

  } catch (error) {
    console.error("API ERROR:", error);

    return new Response(
      JSON.stringify({ message: "Internal Server Error" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}