import { OPENAI_API_KEY } from "./config.js"; // Import API key from config.js

export async function extractEventDetails(emailText) {
  try {
    const response = await fetch("https://api.openai.com/v1/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${OPENAI_API_KEY}`, // Use imported key
      },
      body: JSON.stringify({
        model: "gpt-4",
        messages: [
          { role: "system", content: "Extract event details from an email." },
          { role: "user", content: emailText },
        ],
        max_tokens: 150,
      }),
    });

    if (!response.ok) {
      throw new Error(`API request failed: ${response.statusText}`);
    }

    const data = await response.json();
    return (
      data.choices?.[0]?.message?.content?.trim() || "No details extracted."
    );
  } catch (error) {
    console.error("Error extracting event details:", error);
    return "Error extracting details.";
  }
}
