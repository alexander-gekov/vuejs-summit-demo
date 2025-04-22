<template>
    <div class="flex flex-col gap-4 max-w-4xl mx-auto">
        <h1 class="text-2xl font-bold">Stream Text</h1>
        <input v-model="input" />
        <button @click="handleComplete" :disabled="isLoading">
            <span v-if="isLoading">Streaming...</span>
            <span v-else>Stream</span>
        </button>
        {{ completion }}
    </div>
</template>

<script lang="ts" setup>
import { useCompletion } from '@ai-sdk/vue';
import { openai } from '@ai-sdk/openai';

const input = ref('');

const { completion, complete, isLoading } = useCompletion({
    api: '/api/streamText',
});

const handleComplete = async () => {
    await complete(input.value);
};
</script>

<style></style>
