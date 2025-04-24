<template>
    <div class="flex flex-col gap-4 max-w-4xl mx-auto">
        <h1 class="text-2xl font-bold">Tool Calling</h1>
        <div>Ask for a dad joke:</div>
        <form @submit="handleSubmit">
            <input v-model="input" placeholder="Say something..." />
        </form>
        <div
            v-for="(m, index) in messages"
            :key="m.id ? m.id : index"
            class="mb-4"
        >
            <strong>{{ m.role === 'user' ? 'User: ' : 'AI: ' }}</strong>
            <div v-for="(part, index) in m.parts" :key="index">
                <div v-if="part.type === 'text'">{{ part.text }}</div>
                <div v-else-if="part.type === 'tool-invocation'">
                    <pre class="text-xs bg-gray-200">
calling tool: {{ part.toolInvocation.toolName }}</pre
                    >
                    <div v-if="part.toolInvocation.state === 'result'">
                        {{ part.toolInvocation.result }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useChat } from '@ai-sdk/vue';

const { messages, input, handleSubmit } = useChat({
    api: '/api/tools',
});
</script>

<style></style>
