<template>
    <footer class="bg-blue px-4 relative z-10">
        <div class="container max-w-5xl container-padding py-16 text-white mx-auto">
            <cta-form :formEmbed="this.formEmbed"></cta-form>
            <div class="px-12">
                <p class="text-center text-display text-base mb-4 md:text-left">1050 S. Jefferson Davis Pkwy Suite 205</p>
                <p class="text-center text-display text-base mb-4 md:text-left">New Orleans, LA 70125</p>
                <a href="tel:504-602-6648" class="text-white"><p class="text-center text-white text-display text-5/2xl mb-4 md:text-left font-semibold">504-602-6648</p></a>
                <div class="flex flex-col md:flex-row md:justify-between md:w-full items-center">
                    <p class="text-center font-sans text-sm mb-4 opacity-80 md:mb-0">&copy;Comfort Engineered Systems, Inc. All Rights Reserved.</p>
                    <a href="https://iddigital.us/" class="hover-scale transition font-display text-sm text-white no-underline inline-block leading-none flex items-center w-auto mx-auto md:mx-0">
                        <span>Made by</span>
                        <img svg-inline src="../images/idd.svg" class="w-5 h-5 stroke-current fill-current mx-1 relative">
                        <span>IDdigital</span>
                    </a>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
import CtaForm from "./site-only/CtaForm.vue";

export default {
    name: 'page-footer',
    props: ['ctaLink', 'formEmbed'],
    components: {
        CtaForm
    }
}
</script>
