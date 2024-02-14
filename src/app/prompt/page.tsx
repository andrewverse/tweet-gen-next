async function getPrompt(prompt: string) {
  const req = await fetch(
    "https://api-inference.huggingface.co/models/mistralai/Mistral-7B-Instruct-v0.1",
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
  const prompt = await getPrompt("Summerize an article about gpt-4");
  return (
    <main>
      <PromptComp prompt={prompt} />
    </main>
  );
}
