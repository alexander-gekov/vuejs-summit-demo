import { generateText } from 'ai';
import { openai } from '@ai-sdk/openai';

export default defineEventHandler(async (event) => {
    const { prompt } = await readBody(event);

    const { text, sources, reasoning, toolCalls } = await generateText({
        model: openai('gpt-4o-mini'),
        system: 'You are a helpful assistant.',
        prompt: prompt,
    });

    return text;
});
