<template>
    <div class="flex flex-col gap-4 max-w-4xl mx-auto">
        <h1 class="text-2xl font-bold">Generate Text</h1>
        <input v-model="prompt" />
        <button @click="generateText">
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
const generateText = async () => {
    loading.value = true;
    const response = await $fetch('/api/generateText', {
        method: 'POST',
        body: {
            prompt: prompt.value,
        },
    });
    text.value = response.text;
    loading.value = false;
};
</script>

<style></style>
