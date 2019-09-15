<template>
    <section :id="this.id" :class="this.classes" :style="this.styles">
        <div class="">
            <slot></slot>
        </div>
    </section>
</template>

<script>
export default {
    name: 'padded-section',
    props: ['id', 'styles', 'classes']
}
</script>
