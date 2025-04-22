<template>
    <div class="flex flex-col gap-4 max-w-4xl mx-auto">
        <h1 class="text-2xl font-bold">Generate Object</h1>
        <div>
            Enter a city and receive name, fun fact, country, and population.
        </div>
        <input v-model="prompt" />
        <button @click="generateObject">
            <span v-if="loading">Generating...</span
            ><span v-else>Generate</span>
        </button>
        <p>{{ text }}</p>
    </div>
</template>

<script lang="ts" setup>
const text = ref('');
const loading = ref(false);
const prompt = ref('');
const generateObject = async () => {
    loading.value = true;
    const response = await $fetch('/api/generateObject', {
        method: 'POST',
        body: {
            prompt: prompt.value,
        },
    });
    text.value = response;
    loading.value = false;
};
</script>

<style></style>
