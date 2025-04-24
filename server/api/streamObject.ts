import { streamObject } from 'ai';
import { openai } from '@ai-sdk/openai';
import { z } from 'zod';

export default defineEventHandler(async (event) => {
    const { prompt } = await readBody(event);

    const response = streamObject({
        model: openai('gpt-4o-mini'),
        prompt: prompt,
        schemaName: 'City',
        schemaDescription:
            'A city with a name, fun fact, country, and population.',
        schema: z.object({
            city: z.string(),
            funFact: z.string(),
            country: z.string(),
            population: z.number(),
        }),
    });

    // for await (const partialObject of partialObjectStream) {
    //     console.log(partialObject);
    // }

    return response.toTextStreamResponse();
});
