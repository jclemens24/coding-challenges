/* eslint-disable no-unused-vars */
declare function SimpleVue<D, C, M>(options: {
  data: (this: {}) => D;
  computed: C & ThisType<D>;
  methods: M &
    ThisType<
      D &
        M & {
          [P in keyof C as C[P] extends (...args: any[]) => any
            ? P
            : never]: C[P] extends (...args: any[]) => any
            ? ReturnType<C[P]>
            : never;
        }
    >;
}): unknown;

const instance = SimpleVue({
  data() {
    return {
      firstname: 'Type',
      lastname: 'Challenges',
      amount: 10
    };
  },
  computed: {
    fullname() {
      return this.firstname + ' ' + this.lastname;
    }
  },
  methods: {
    hi() {
      alert(this.fullname.toLowerCase());
    }
  }
});
