<template>
    <div id="main-copy" class="w-full max-w-5xl mx-auto flex flex-wrap mb-32 md:mt-40">
        <div class="w-full md:w-1/2 mb-8 md:mb-0">
            <img class="w-full block" src="/dist/images/ac-picture.jpg">
        </div>
        <div class="w-full md:w-1/2 md:flex md:flex-col md:justify-center md:pl-20 xl:pl-30">
            <h2 class="uppercase text-dark-blue font-bold font-normal font-display text-center text-7/2xl mb-4 w-auto inline-block center-x-help relative md:text-left md-no-center-help md:self-start lg:text-6xl">Did you know?</h2>
            <p class="text-dark-blue font-sans text-lg leading-tight px-4 mb-2 md:max-w-sm md:px-0 md:text-3/2xl md:leading-normal md:mb-6">You should replace your AC unit every 12-15 years. Waiting too long to replace it can risk:</p>
            <ul class="pl-0" style="padding-bottom: 40px;">
                <li><div class="text-center md:text-left text-lg md:text-3/2xl px-4 md:ml-4 md:py-4 py-2"><span class="font-bold text-dark-blue font-sans">A disruptive outage</span></div></li>
                <li><div class="text-center md:text-left text-lg md:text-3/2xl px-4 md:ml-4 md:py-4 py-2"><span class="font-bold text-dark-blue font-sans">Higher Utility Bills</span></div></li>
                <li><div class="text-center md:text-left text-lg md:text-3/2xl px-4 md:ml-4 md:py-4 py-2"><span class="font-bold text-dark-blue font-sans">Expensive Repairs</span></div></li>
            </ul>
            <ul class="pl-0">
                <li class="boxed-list-item"><div class="pl-11 ml-2 md:pl-64 md:-ml-64"><span class="text-lg leading-relaxed text-white absolute pt-8 md:pt-10 font-display md:text-3/2xl">IF YOU REPLACED YOUR AC UNIT RIGHT AFTER HURRICANE KATRINA, IT’S TIME TO REPLACE IT AGAIN.</span></div></li>
            </ul>
        </div>
    </div>
</template>

<script>
    import "../images/ac-picture.jpg";

    export default {
        name: 'main-copy-section'
    }
</script>
