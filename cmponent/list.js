export default {
  props: {
    list: Array
  },
  template: `
    <ul>
      <li v-for="item in list" :key="item" @click="handleClick(item)">{{ item }}</li>
    </ul>
  `,
  methods: {
    handleClick(item) {
      console.log(`Clicked on ${item}`);
    }
  }
};