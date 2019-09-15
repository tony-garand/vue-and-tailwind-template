<template>
    <padded-section styles="background-image: url('/dist/images/about-background.jpg'); background-repeat: no-repeat; background-size: cover; background-position: top -20vh center;" classes="bg-none px-0 lg:px-0 lg:mb-56 sm:pt-24 md:pt-32 lg:pt-48">
        <h2 class="uppercase text-center font-bold text-dark-blue font-normal font-display lg:text-6xl m-auto pt-24 pb-12 lg:pt-1">ABOUT COMFORT ENGINEERED SYSTEMS</h2>
        <div class="bg-blue-transparent border-4 border-white px-4 lg:px-20 py-12 lg:-mb-56 max-w-9/10 lg:max-w-8/10 md:w-3xl sm:w-2xl mx-auto lg:flex lg:flex-col items-center">
            <p class="text-center text-lg text-dark-blue leading-narrow font-sans mb-8 lg:text-5/2xl lg:leading-normal" style="max-width:1180px;">
              Thousands of residents in the New Orleans area are turning to Comfort Engineered Systems, Inc. to keep them nice and cool during the hot, humid summer months. We strive to lead the HVAC industry in dependable, prompt, courteous service, sales, and installation. Our expertise is backed up by an A+ rating in the BBB and NATE (North American Technician Excellence) and BPI (Building Performance Institute) certifications.
            </p>
            <div class="flex flex-wrap justify-center mx-auto px-4 mb-12" style="max-width: 940px;">
                <div class="mr-4 mb-4 lg:mr-5">
                    <a href="http://bcert.me/sslgyluz" target="_blank"><img style="max-width: 120px;" src="/dist/images/com4t-nate-badge.png"></a>
                </div>
                <div class="mb-4 pt-4">
                    <img style="max-width: 120px;" src="/dist/images/blue-seal.png">
                </div>
            </div>
            <a :href="this.ctaLink" data-open-modal class="button rounded-none uppercase font-bold font-display px-8 md:px-16 py-8 text-1xl lg:text-lg">Schedule an Appointment</a>
        </div>
    </padded-section>
</template>

<script>
import "../images/about-background.jpg";
import "../images/com4t-nate-badge.png";
import "../images/blue-seal.png";

export default {
    name: 'about-section',
    props: ['ctaLink']
}
</script>
