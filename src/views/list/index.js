import navArray from './data.js';

const index = {
  name: 'index',

  data () {
    return {

    }
  },
  computed: {

  },
  methods: {
    toggleClick () {

    },
  },

  // 挂载之后 相当于原来的ready
  mounted: function () {
    this.$nextTick(function () {
      // 保证 this.$el 已经插入文档

    })
  },

};

export default index;
