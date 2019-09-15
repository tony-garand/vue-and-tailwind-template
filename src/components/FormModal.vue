<template>
    <modal id="modal">
        <modal-inner id="schedule-appointment">
            <div class="md:-mt-32">
                <cta-form :formEmbed="formEmbed"></cta-form>
            </div>
        </modal-inner>
        <modal-inner id="thanks">
            <div class="bg-white p-8 w-full shadow-md-lg mx-auto -mt-32" style="max-width: 590px;">
                <p class="font-display lg:text-4xl text-base font-normal uppercase mb-8 text-blue">Thank You</p>
                <p class="text-display font-normal text-base lg:text-xl mb-8">Thanks for contacting us. We'll be in touch soon.</p>
            </div>
        </modal-inner>
    </modal>
</template>

<script>
import CtaForm from "./site-only/CtaForm.vue";

export default {
    name: 'form-modal',
    props: ['formEmbed'],
    components: {
        CtaForm
    }
}
</script>