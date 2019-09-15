<template>
    <div class="bg-white pb-10 pt-4 px-6 md:p-8 w-full -mt-32 md:mt-0 shadow-md-lg mb-8 md:mb-16 mx-auto" style="max-width: 590px;">
        <p class="font-display font-bold m-auto md:m-left text-2xl md:text-4xl text-left text-base font-normal uppercase mb-4 md:mb-6 text-blue">Schedule an Appointment</p>
        <!-- <div v-html="this.formEmbed" class="text-black mb-8"></div> -->
        <form method="post" action="https://getform.io/f/e06c94a0-75e9-49ac-9445-8a9e738dce87" accept-charset="utf-8" id="scheduleAppointment-form" class="lg:flex lg:flex-wrap">
            <div class="field required w-full lg:w-1/2 lg:pr-4">
                <label for="firstName" class="mb-3 font-display font-bold text-base text-black block">First Name</label>
                <input type="text" name="firstName" class="w-full border-2 border-grey2 text-base py-1 md:py-4 px-2 md:px-5 mb-4 md:mb-8 text-grey6 rounded transition focus:border-orange" required aria-required="true" placeholder="John">
            </div>
            <div class="field required w-full lg:w-1/2">
                <label for="lastName" class="mb-3 font-display font-bold text-base text-black block">Last Name</label>
                <input type="text" name="lastName" class="w-full border-2 border-grey2 text-base py-1 md:py-4 px-2 md:px-5 mb-4 md:mb-8 text-grey6 rounded transition focus:border-orange" required aria-required="true" placeholder="Doe">
            </div>
            <div class="field required w-full">
                <label for="phone" class="mb-3 font-display font-bold text-base text-black block">Phone</label>
                <input type="tel" autocomplete="tel" name="phone" class="w-full border-2 border-grey2 text-base py-1 md:py-4 px-2 md:px-5 mb-4 md:mb-8 text-grey6 rounded transition focus:border-orange" required aria-required="true" placeholder="(555)541-2345">
            </div>
            <div class="field required w-full">
                <label for="email" class="mb-3 font-display font-bold text-base text-black block">Email Address</label>
                <input type="email" autocomplete="email" name="email" class="w-full border-2 border-grey2 text-base py-1 md:py-4 px-2 md:px-5 mb-4 md:mb-8 text-grey6 rounded transition focus:border-orange" required aria-required="true" placeholder="example@example.com">
            </div>
            <div class="g-recaptcha mb-4" data-sitekey="6LfKe7EUAAAAAA7tySENV6F7un4sEhtQeHXjgin0"></div>
            <div class="w-full mb-6">
                <button type="submit" class="button w-full rounded-none uppercase mx-auto block font-display font-semibold text-base py-3 hover:bg-blue">Send</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: 'cta-form',
    props: ['formEmbed']
}
</script>
