async function getPrompt(prompt: string) {
  const req = await fetch(
    "https://api-inference.huggingface.co/models/giordanorogers/mistral-X-v2",
    {
      method: "Post",
      headers: {
        Authorization: `Bearer ${process.env.HUGGING_FACE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ inputs: prompt }),
    }
  );
  return req.json();
}

import PromptComp from "@/components/PromptComp";

export default async function Prompt() {
  const prompt = await getPrompt("Prompt Text");
  return (
    <main>
      <PromptComp prompt={prompt} />
    </main>
  );
}
