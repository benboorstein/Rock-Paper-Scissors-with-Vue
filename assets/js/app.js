const App = {
    data() {
        return {
            tools: [
                'rock',
                'paper',
                'scissors'
            ],
            rules: { 
                rock: 'scissors',
                paper: 'rock',
                scissors: 'paper'
            },
            message: 'Please play!',
            userChoice: '',
            computerChoice: ''
        }
    },    
    methods: {
        playGame(user) {
            let AI = this.tools[Math.floor(Math.random() * this.tools.length)]

            if (AI == this.rules[user]) {
                this.message = 'You win'
                this.userChoice = user
                this.computerChoice = AI
            } else if (user == this.rules[AI]) {
                this.message = 'Computer wins'
                this.userChoice = user
                this.computerChoice = AI
            } else if (user == AI) {
                this.message = 'Tie game'
                this.userChoice = user
                this.computerChoice = AI
            } else {
                this.message = 'mistake'
                this.userChoice = 'mistake'
                this.computerChoice = 'mistake'
            }
        }
    }
}

Vue.createApp(App).mount('#app')