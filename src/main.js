import './normalize.tailwind.css';
import '../node_modules/flickity/css/flickity.css';
import './main.tailwind.css';

import Vue from 'vue';
import Page from './components/Page.vue';
import PaddedSection from './components/PaddedSection.vue';
import ImageWithContent from './components/ImageWithContent.vue';
import Modal from './components/Modal.vue';
import ModalInner from './components/ModalInner.vue';

Vue.component('padded-section', PaddedSection);
Vue.component('image-with-content', ImageWithContent);
Vue.component('modal', Modal);
Vue.component('modal-inner', ModalInner);

let root = new Vue({
    el: '#page',
    render: h => h(Page),
    mounted () {
        // You'll need this for renderAfterDocumentEvent.
        document.dispatchEvent(new Event('render-event'))
    }
});