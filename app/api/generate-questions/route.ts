import { generateText } from "ai"
import { gateway } from "@ai-sdk/gateway"

const SYSTEM_PROMPT = `You are an expert Scottish Physics Tutor for National 5, Higher, and Advanced Higher.
When generating questions:
1. Ensure they match the SQA curriculum standards exactly.
2. Provide 'Multiple Choice' (4 options, one correct) or 'Paper' questions (Multi-part open ended with mark schemes).
3. Use LaTeX for all mathematical notation: $...$ for inline and $$...$$ for blocks.
4. Output valid JSON only.

Structure for Multiple Choice (generate 5 questions as an array):
[{"type":"mc","topic":"string","subtopic":"string","question":"string","options":["A","B","C","D"],"answer":0,"explanation":"string"}]

Structure for Paper Questions (generate 3 questions as an array):
[{
  "type":"paper",
  "topic":"string",
  "subtopic":"string",
  "question":"string",
  "parts":[
    {"id":"a","text":"string","marks":3,"answer":"string","markingScheme":"string"}
  ]
}]`

export async function POST(request: Request) {
  try {
    const { mode, level, topics, includeALevel, includeMultiTopic, numberOfQuestions } = await request.json()

    const questionCount = numberOfQuestions || (mode === "mc" ? 5 : 3)
    const prompt = `Generate a set of ${questionCount} ${mode === "mc" ? "Multiple Choice" : "Paper"} questions for ${level} Physics.
Topics to cover: ${topics}.
Advanced Level: ${includeALevel}.
Multi-topic links: ${includeMultiTopic}.
Return ONLY the JSON array, no other text.`

    const { text } = await generateText({
      model: gateway("openai/gpt-4o-mini"),
      system: SYSTEM_PROMPT,
      prompt,
    })

    // Parse the JSON from the response
    const jsonMatch = text.match(/\[[\s\S]*\]/)
    if (jsonMatch) {
      const questions = JSON.parse(jsonMatch[0])
      return Response.json({ questions })
    }

    return Response.json({ error: "Failed to parse questions" }, { status: 500 })
  } catch (error) {
    console.error("Error generating questions:", error)
    return Response.json({ error: "Failed to generate questions" }, { status: 500 })
  }
}
