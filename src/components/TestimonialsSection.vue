<template>
    <div class="pt-40 pb-20 overflow-x-hidden">
        <padded-section classes="testimonial-hero px-4">
            <h2 class="text-white font-bold uppercase text-7/2xl font-normal font-display leading-none lg:text-6xl pt-24 lg:pt-52 m-auto lg:max-w-9/10">Stories From <br class="lg:hidden">Our Customers</h2>
        </padded-section>
        <padded-section classes="relative px-4 -mt-20 pb-28 m-auto lg:max-w-4/5">
            <div class="main-carousel z-10 w-full relative lg:flex lg:-mr-8">
                <testimonial :copy="testimonials[0].copy" classes="mr-8"></testimonial>
                <testimonial :copy="testimonials[1].copy" classes="mr-8 "></testimonial>
                <testimonial :copy="testimonials[2].copy"></testimonial>
            </div>
            <div class="relative md:hidden pin-b w-full pb-4 pt-16 text-dark-bluee m-auto">
                <p class="text-center font-sans text-3/2xl text-dark-blue mx-auto mb-4">Swipe to view reviews</p>
                <img svg-inline class="w-12 h-12 mx-auto block fill-current" src="../images/swipe.svg">
            </div>
        </padded-section>
    </div>
</template>

<script>
import "../images/testimonial-background.jpg";

import Testimonial from './Testimonial.vue';

export default {
    name: 'testimonials-section',
    data() {
        return {
            testimonials: [
                {
                    copy: 'I recently replaced my HVAC system. CES did a fantastic job with the installation of the new unit and removal/clean up. <strong>I was amazed that everything was done so quickly. Their crew is very professional.</strong> I would gladly recommend them to anyone.'
                },
                {
                    copy: 'They really know their stuff. In each instance I have needed advice and work on the system, <strong>they responded quickly and gave advice that improved the operation of the system.</strong> I am very pleased with Comfort Engineered Systems and recommend them for A/C work and generators.'
                },
                {
                    copy: '<strong>I’m extremely impressed with the quality and precise installation work performed by Comfort.</strong> They made me feel very comfortable and satisfied, not only with their outstanding installation work, but by explaining the various components and operation of the unit itself. I look forward to our working relationship for any additional services I may need.'
                }
            ]
        };
    },
    components: {
        Testimonial
    }
}
</script>
