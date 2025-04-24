<template>
    <div class="flex flex-col gap-4 max-w-4xl mx-auto">
        <h1 class="text-2xl font-bold">Chatbot</h1>
        <div>Start chatting.</div>
        <div>
            <div v-for="m in messages" :key="m.id">
                {{ m.role === 'user' ? 'User: ' : 'AI: ' }}
                <div v-for="(part, index) in m.parts" :key="index">
                    <div v-if="part.type === 'text'">{{ part.text }}</div>
                </div>
            </div>

            <form @submit="handleSubmit">
                <input v-model="input" placeholder="Say something..." />
            </form>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useChat } from '@ai-sdk/vue';

const { messages, input, handleSubmit } = useChat({
    api: '/api/chat', //  defaults to /api/chat
});
</script>

<style></style>
