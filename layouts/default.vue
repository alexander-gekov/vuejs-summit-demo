<template>
    <div class="w-4xl max-w-4xl mx-auto">
        <div class="flex flex-col gap-4">
            TOC:
            <ul>
                <li v-for="link in links" :key="link.to">
                    <NuxtLink :to="link.to">{{ link.text }}</NuxtLink>
                </li>
            </ul>
        </div>
        <slot />
    </div>
</template>

<script lang="ts" setup>
const links = [
    { to: '/generateText', text: 'Generate Text' },
    { to: '/streamText', text: 'Stream Text' },
    { to: '/generateObject', text: 'Generate Object' },
    { to: '/streamObject', text: 'Stream Object' },
    { to: '/toolCalling', text: 'Tool Calling' },
];
</script>

<style></style>
