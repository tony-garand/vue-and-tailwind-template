<template>
    <section class="bg-tan relative z-10">
        <div class="banner-bg container-padding">
            <div class="container max-w-5xl flex mx-auto pt-10 pb-10 items-center justify-around flex-wrap banner">
                <p class="text-white font-bold font-sans text-2xl w-full lg:w-auto text-center mb-8 lg:mb-0">Don’t wait any longer. Schedule your <strong class="underline uppercase text-yellow">FREE</strong> consultation today!</p>
                <a :href="this.ctaLink" data-open-modal class="banner-button">Schedule an Appointment</a>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'banner',
    props: ['ctaLink']
}
</script>
