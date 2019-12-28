import Vue from 'vue';


Vue.directive('columns', {
    bind(el, binding){
        let numOfColumns = binding.value;
        el.style.display = 'grid';
        el.style.gridTemplateColumns = `repeat(${numOfColumns}, 1fr)`;
        el.style.gridColumnGap = '100px';
        el.style.gridRowGap = '20px';
    }
});
