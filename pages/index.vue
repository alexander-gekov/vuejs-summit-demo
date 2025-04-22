<template>
    <div>
        <div v-for="m in messages" :key="m.id ? m.id : index">
            {{ m.role === 'user' ? 'User: ' : 'AI: ' }}
            <div v-for="part in m.parts" :key="part.id">
                <div v-if="part.type === 'text'">{{ part.text }}</div>
            </div>
        </div>

        <form @submit="handleSubmit">
            <input v-model="input" placeholder="Say something..." />
        </form>
    </div>
</template>

<script lang="ts" setup>
import { useChat } from '@ai-sdk/vue';

const { messages, input, handleSubmit } = useChat({
    api: '/api/chat', //  defaults to /api/chat
});

const links = [
    { to: '/generateText', text: 'Generate Text' },
    { to: '/streamText', text: 'Stream Text' },
    { to: '/generateObject', text: 'Generate Object' },
    { to: '/streamObject', text: 'Stream Object' },
];
</script>

<style></style>
