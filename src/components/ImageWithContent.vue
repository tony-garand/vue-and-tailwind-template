<template>
    <div :class="'mt-8 flex flex-wrap mb-24 md:mb-4' + ((reverse) ? ' md:flex-row-reverse' : '')">
        <div class="w-full md:w-1/2 mb-4 md:mb-0">
            <img :src="image" style="max-width: 430px" class="w-full block">
        </div>
        <div :class="'w-full md:w-1/2 flex items-center' + ((reverse) ? '' : ' pl-4')">
            <div class="md:w-4/5 flex-col items-center">
                <h2 class="font-display text-9/2xl font-normal uppercase mb-4">{{ heading }}</h2>
                <p class="font-sans text-xl leading-normal">{{ copy }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'image-with-content',
    props: [
        'heading',
        'copy',
        'image',
        'reverse'
    ]
}
</script>

