import { connectToDatabase } from "@utils/database";
import Prompt from "@models/prompt";

// GET /prompts/:id
export const GET = async (request, { params }) => {
  try {
    await connectToDatabase();

    params.id

    const prompts = await Prompt.find({
        creator: params.id,
    }).populate("creator");

    return new Response(JSON.stringify(prompts), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(error.message || "Failed to fetch all prompts", {
      status: 500,
    });
  }
};