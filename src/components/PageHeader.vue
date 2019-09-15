<template>
    <header id="page-header" class="bg-white shadow sticky pin-t z-40 w-full">
        <div id="page-header-inner" class="flex justify-between transition-long px-3 py-2 mx-auto container mx-auto max-w-5xl lg:py-2">
            <div class="flex">
                <a href="https://www.com4t.com/" target="_blank" class="self-center logo-box transition">
                    <img svg-inline class="w-full h-auto" src="../images/comfort-logo.svg" alt="Comfort Engineered Systems Logo">
                </a>
            </div>
            <div class="flex items-center">
                <a href="tel:504-602-6648" class="bg-blue rounded-full flex w-10 h-10 justify-center items-center mr-2 lg:hidden">
                    <img svg-inline class="w-5 h-5 object-contain" src="../images/phone.svg">
                </a>
                <a :href="this.ctaLink" data-open-modal class="bg-blue rounded-full flex w-10 h-10 justify-center items-center lg:hidden">
                    <img svg-inline class="w-5 h-5 object-contain" src="../images/mail.svg">
                </a>
                <span><a href="tel:504-602-6648" class="button font-display font-bold uppercase button-transparent mr-4 hidden lg:inline-block text-lg transition">Call (504) 602-6648</a></span>
                <span><a :href="this.ctaLink" data-open-modal class="button hidden font-display font-bold uppercase lg:inline-block text-lg rounded-none transition">Schedule an Appointment</a></span>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        name: 'page-header',
        props: ['ctaLink'],
        data() {
            return {
                links: [
                    { label: 'The Evolution', url: '#evolution' },
                    { label: 'The Game Changer', url: '#game-changer' },
                    { label: 'Case Study', url: '#case-study' },
                    { label: 'About', url: '#about' }
                ]
            };
        }
    }
</script>
