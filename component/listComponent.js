
export default {
  props: {
    list: Array,
    text: String
  },
  template: `<section class="flex flex-col bg-main">
  <section class="flex flex-justify-between">
   <span>{{ text }}</span>
   <span @click="handleMore">more</span>
 </section>
 <slot>
 <ul>
      <li v-for="item in list" :key="item" @click="handleClick(item)">{{ item }}</li>
    </ul>
 </slot>
    
  </section>`,

  methods: {
    handleClick(item) {
      console.log(`Clicked on ${item}`);
    },
    handleMore() {
      console.log("more");
    },
  },
};

