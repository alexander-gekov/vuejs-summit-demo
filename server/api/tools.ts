import { openai } from '@ai-sdk/openai';
import { streamText, tool } from 'ai';
import { z } from 'zod';

export default defineLazyEventHandler(async () => {
    const apiKey = useRuntimeConfig().openaiApiKey;
    if (!apiKey) throw new Error('Missing OpenAI API key');

    return defineEventHandler(async (event: any) => {
        const { messages } = await readBody(event);

        const result = streamText({
            model: openai('gpt-4o'),
            messages,
            tools: {
                joke: tool({
                    description: 'Get a random joke',
                    parameters: z.object({}),
                    execute: async () => {
                        const joke = await $fetch(
                            `https://icanhazdadjoke.com/`,
                            {
                                headers: {
                                    Accept: 'application/json',
                                },
                            },
                        );
                        console.log(joke);
                        return (joke as any).joke;
                    },
                }),
                quickMaths: tool({
                    description: 'Add the two numbers together',
                    parameters: z.object({
                        a: z.number(),
                        b: z.number(),
                    }),
                    execute: async ({ a, b }) => {
                        return a + b;
                    },
                }),
            },
        });

        return result.toDataStreamResponse();
    });
});
