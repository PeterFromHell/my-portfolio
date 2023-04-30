import type { APIRoute } from "astro";
import query from "../../../lib/queryApi";

export const post: APIRoute = async (req, res) => {
    const response = await query(prompt)

    return new Response(
        JSON.stringify({
            message: 'Success!'
        }),
        {status:200}
    )
}