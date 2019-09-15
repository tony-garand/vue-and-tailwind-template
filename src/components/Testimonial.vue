<template>
    <div :class="'bg-blue-transparent border-8 border-white p-4 w-full relative h-128 md:h-auto lg:h-auto shadow-heavy lg:w-1/3 ' + this.classes" :style="this.styles">
        <div class="w-full flex mb-8">
            <img svg-inline class="w-7 h-7 mr-3" src="../images/star.svg">
            <img svg-inline class="w-7 h-7 mr-3" src="../images/star.svg">
            <img svg-inline class="w-7 h-7 mr-3" src="../images/star.svg">
            <img svg-inline class="w-7 h-7 mr-3" src="../images/star.svg">
            <img svg-inline class="w-7 h-7 mr-3" src="../images/star.svg">
        </div>
        <p class="text-dark-blue text-lg leading-normal font-sans mb-12" v-html="this.copy"></p>
        <p class="text-dark-blue bottom-0 font-bold uppercase font-display text-base pb-8" style="bottom: 0; position: absolute">~ Cool and Comfortable Customer</p>
    </div>
</template>

<script>
export default {
    name: 'testimonial',
    props: ['copy', 'classes', 'styles']
}
</script>
