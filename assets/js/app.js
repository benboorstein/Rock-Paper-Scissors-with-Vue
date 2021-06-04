const App = {
    data() {
        return {
            // rules: { 
            //     //rock: 'scissors',
            //     //paper: 'rock',
            //     //scissors: 'paper'
            // }
            tools: [
                'Rock',
                'Paper',
                'Scissors'
            ],
            results: [
                { result: 'You win' },
                { result: 'Computer wins' },
                { result: 'Tie game' }  
            ]
        }
    },
    methods: {
        func(theResult) { // rename this function at some point
            // console.log(this.results[0].result)
            theResult = this.results[0].result
        }
    }
}

Vue.createApp(App).mount('#app')


// old questions for self:
// R my thought of storing the result string in "result" because I THINK this will render '{{ result }}' properly.
// The key is figuring out how to handle the 'rules' object.
// Also: Can I just have one of the three (RPS) <li> in the HTML by having an array of them in JS and looping through them in the HTML?