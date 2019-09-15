<template>
    <div id="page" class="antialiased z-0" data-server-rendered="true">
        <div id="page-inner" class="relative">
          <page-header :ctaLink="ctaLink"></page-header>
          <hero-section :ctaLink="ctaLink"></hero-section>
          <main-copy-section></main-copy-section>
          <special-offer></special-offer>
          <about-section :ctaLink="ctaLink"></about-section>
          <testimonials-section></testimonials-section>
          <page-footer :formEmbed="formEmbed"></page-footer>
        </div>
        <form-modal :formEmbed="formEmbed"></form-modal>
    </div>
</template>

<script>
    import PageHeader from './PageHeader.vue';
    import HeroSection from './HeroSection.vue';
    import PageFooter from './PageFooter.vue';
    import Banner from './Banner.vue';
    import MainCopySection from './MainCopySection.vue';
    import AboutSection from './AboutSection.vue';
    import TestimonialsSection from './TestimonialsSection.vue';
    import FormModal from './FormModal.vue';
    import SpecialOffer from './site-only/SpecialOffer.vue';
    import MobileForm from './site-only/MobileForm.vue';

    export default {
        name: 'page',
        data() {
            return {
                ctaLink: '/#schedule-appointment',
                formEmbed: "{{ craft.sproutForms.displayForm('scheduleAppointment') }}"
            };
        },
        components: {
            PageHeader,
            HeroSection,
            PageFooter,
            Banner,
            MainCopySection,
            AboutSection,
            TestimonialsSection,
            FormModal,
            SpecialOffer,
            MobileForm
        }
    }
</script>
