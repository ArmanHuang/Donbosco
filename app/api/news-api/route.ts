import { newsData } from "@/data/news";

export async function GET() {
  try {
    console.log("🔥 NEWS API HIT");
    console.log("🚀 ROUTE NEWS LOADED");

    return new Response(JSON.stringify(newsData), {
      headers: { "Content-Type": "application/json" },
    });

  } catch (error) {
    console.error("NEWS API ERROR:", error);

    return new Response(
      JSON.stringify({ message: "Internal Server Error" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}