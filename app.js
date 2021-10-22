const app = Vue.createApp({
    data() {
        return {
            courseGoalA: 'Finish the Course',
            courseGoalB: 'Start the Course',
            vueLink: 'https://vuejs.org',
            counter: 10,
            name: '',
            lastname:'',
            fullname: ''
        }
    },

    watch: {
         counter(value) {
             if(value > 50) {
                 const that = this;
                 setTimeout(function() {
                     that.counter = 0
                 }, 2000)
            // this.counter = 0;
         }
        }
    },

    computed: {
        fullName() {
            if (this.name === '' || this.lastname === '') {
                return ''
            }
            return this.name + ' ' + this.lastname;
        }
    },

    methods: {
        output() {
            let randomNumber = Math.random()

            if(randomNumber < 0.5)
           { return this.courseGoalA}
            else
            {return this.courseGoalB}
        },
         add(num) {
            this.counter += num;
        },
        reduce(num) {
            this.counter -= num;
        },
        setName(event, lname) {
            this.name = event.target.value;
        },
        confirmedInput() {
            this.confirmedName = this.name;
        },
        resetInput() {
             this.name = ''
        },
        outputFullName() {
             if (this.name === '') {
                 return ''
             }
             return this.name + ' ' + 'Asare';
        }

    }
});

app.mount('#user-goal');
