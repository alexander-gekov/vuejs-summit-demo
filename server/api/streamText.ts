import { streamText } from 'ai';
import { openai } from '@ai-sdk/openai';

export default defineEventHandler(async (event) => {
    const { prompt } = await readBody(event);

    const result = streamText({
        model: openai('gpt-4o-mini'),
        prompt: prompt,
    });

    // for await (const chunk of result.textStream) {
    //     process.stdout.write(chunk);
    // }

    return result.toDataStreamResponse();
});
