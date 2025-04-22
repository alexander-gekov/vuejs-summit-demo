import { generateObject, generateText } from 'ai';
import { openai } from '@ai-sdk/openai';
import { z } from 'zod';

export default defineEventHandler(async (event) => {
    const { prompt } = await readBody(event);

    const { object } = await generateObject({
        model: openai('gpt-4o-mini'),
        prompt: prompt,
        schema: z.object({
            city: z.string(),
            funFact: z.string(),
            country: z.string(),
            population: z.number(),
        }),
    });

    return object;
});
