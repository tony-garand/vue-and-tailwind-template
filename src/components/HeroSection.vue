<template>
    <div id="hero" class="relative">
        <div class="w-full">
            <img class="w-full" style="object-fit: cover; object-position: 100% 0; max-height: 1100px;" src="/dist/images/hero.jpg" alt="A woman relaxing on the couch in a well-air-conditioned room.">
        </div>
        <div class="w-full px-8 lg:absolute lg-center-xy-help lg:max-w-4xl">
            <div class="bg-blue-transparent border-2 border-white px-6 py-4 flex flex-col items-center hero-copy lg:border-4 lg:px-8 lg:py-10 mx-auto lg:mx-0" style="max-width: 600px;">
                <h1 class="font-display text-blue uppercase font-bold tracking-narrow text-7/2xl leading-none font-normal text-center mb-12 lg:text-6xl lg:text-left" style="text-shadow: -3px 3px #fff;"><span class="text-secondary uppercase font-bold">Summer</span> IS HERE! DON’T GET STUCK IN THE HEAT. REPLACE YOUR AC SYSTEM TODAY!</h1>
                <a :href="this.ctaLink" data-open-modal class="button uppercase rounded-none font-bold px-8 md:px-16 text-1xl py-8 font-display lg:text-lg">Schedule an Appointment</a>
            </div>
        </div>
    </div>
</template>

<script>
import "../images/hero.jpg"

export default {
    name: 'hero-section',
    props: ['ctaLink']
}
</script>
