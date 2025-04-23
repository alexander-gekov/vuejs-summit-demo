<template>
    <div class="flex flex-col gap-4 max-w-4xl mx-auto">
        <h1 class="text-2xl font-bold">Stream Object</h1>
        <div>
            Enter a city and receive name, fun fact, country, and population.
        </div>
        <input v-model="input" />
        <button @click="handleComplete" :disabled="isLoading">
            <span v-if="isLoading">Generating...</span>
            <span v-else>Generate</span>
        </button>
        <p>{{ completion }}</p>
    </div>
</template>

<script lang="ts" setup>
import { useCompletion } from '@ai-sdk/vue';
import { openai } from '@ai-sdk/openai';
import { z } from 'zod';
const input = ref('');

const { completion, complete, isLoading } = useCompletion({
    api: '/api/streamObject',
    streamProtocol: 'text',
});

const handleComplete = async () => {
    await complete(input.value);
};
</script>

<style></style>
