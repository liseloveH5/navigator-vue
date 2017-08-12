import navArray from './data.js';

const index = {
  name: 'demo-base',

  data () {
    return {
      spanLeft: 4,
      spanRight: 20,
      navData:'',
    }
  },
  computed: {
    iconSize () {
      return this.spanLeft === 4 ? 14 : 24;
    }
  },
  methods: {
    toggleClick () {
      if (this.spanLeft === 4) {
        this.spanLeft = 1;
        this.spanRight = 23;
      } else {
        this.spanLeft = 4;
        this.spanRight = 20;
      }
    },
  },

  // 挂载之后 相当于原来的ready
  mounted: function () {
    this.$nextTick(function () {
      // 保证 this.$el 已经插入文档
      this.navData=navArray.navData;

    })
  },

};

export default index;
