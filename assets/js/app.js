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
        playGame(userTool) {
            let AI = this.tools[Math.floor(Math.random() * this.tools.length)]

            if (AI === this.rules[userTool]) {
                this.message = 'You win'
                this.userChoice = userTool
                this.computerChoice = AI
            } else if (userTool === this.rules[AI]) {
                this.message = 'Computer wins'
                this.userChoice = userTool
                this.computerChoice = AI
            } else if (userTool === AI) {
                this.message = 'Tie game'
                this.userChoice = userTool
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