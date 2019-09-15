<template>
    <div :class="'relative lg:hidden mb-32 ' + this.classes">
        <div class="w-full">
        </div>
        <div class="w-full px-4 relative z-5">
            <cta-form :formEmbed="this.formEmbed"></cta-form>
        </div>
    </div>
</template>

<script>

import CtaForm from './CtaForm.vue';

export default {
    name: 'mobile-form',
    props: ['formEmbed', 'classes'],
    components: {
        CtaForm
    }
}
</script>
