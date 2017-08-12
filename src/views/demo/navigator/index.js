const index = {
  name: 'demo-base',

  data () {
    return {
      spanLeft: 5,
      spanRight: 19,
      hide:false,
    }
  },
  computed: {
    iconSize () {
      return this.spanLeft === 5 ? 14 : 24;
    }
  },
  methods: {
    toggleClick () {
      if (this.spanLeft === 5) {
        this.spanLeft = 2;
        this.spanRight = 22;
      } else {
        this.spanLeft = 5;
        this.spanRight = 19;
      }
    },
  }

};

export default index;
