import axios from 'axios'


export default function generateJoke() {
    // Icanhazdadjokes.com require to send headers 
    // with application/json for the accept header
    const config = {
        headers: {
            Accept: 'application/json'
        }
    }

    axios.get('https://icanhazdadjoke.com', config)
        .then(res => {
            document.getElementById('joke').innerHTML = res.data.joke
        })
}