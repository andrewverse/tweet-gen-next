import React from "react";
import PromptComp from "@/components/PromptComp";

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

const Summary = ({ selectedArticles }: { selectedArticles: Article[] }) => {
  // const prompt = await getPrompt("Summerize an article about gpt-4");

  return (
    <div>
      <div className='font-bold mt-4'>2. SELECT THE SUMMARY YOU WANT</div>
      <PromptComp prompt={prompt} />
    </div>
  );
};

export default Summary;
