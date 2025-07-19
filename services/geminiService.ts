
import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { resumeText } from '../constants';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

const systemInstruction = `You are a friendly and professional AI assistant for Adithyan M. Nair's portfolio website. Your goal is to answer questions about his skills, experience, and projects based ONLY on the provided resume information below. Do not invent information. If a question is about something not in the resume (e.g., his favorite color, personal opinions), politely state that you can only answer questions related to his professional profile. Keep your answers concise and helpful.

--- RESUME START ---
${resumeText}
--- RESUME END ---
`;

export function startChat(): Chat {
  const chat = ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: systemInstruction,
    },
  });
  return chat;
}

export async function sendMessage(chat: Chat, message: string): Promise<AsyncGenerator<GenerateContentResponse>> {
    const result = await chat.sendMessageStream({ message });
    return result;
}
