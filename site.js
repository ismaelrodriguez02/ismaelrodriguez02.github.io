(async()=>{
var message = document.querySelector('#welcome')

const hours = new Date().getHours()

const isMorning= hours >= 4 && hours < 12
const isAfternoon = hours >= 12 && hours < 17
const isEvening = hours >= 17 || hours < 4

if (isMorning) 
{
    message.textContent = "Good Morning, Welcome to Ismael's Page"
}
else if (isAfternoon) 
{
    message.textContent = "Good Afternoon, Welcome to Ismael's Page"
}
else if (isEvening) 
{
    message.textContent = "Good Evening, Welcome to Ismael's Page"
 }


 localStorage.setItem("It's a secret to everybody", "Donald Trump won the elections")



 const urls = [
    'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/933964/pexels-photo-933964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1251861/pexels-photo-1251861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
].map(url => { (new Image()).src = url; return url })

const images = document.querySelectorAll('#carousel img')
const prev = document.querySelector('#prev')
const next = document.querySelector('#next')

let currentImage = 0
const showImages = () => {
    const offset = currentImage % urls.length
    images.forEach((image, index) => {
        const imageIndex = (index + offset + urls.length) % urls.length
        image.src = urls[imageIndex]
    })
}

prev.addEventListener('click', ()=> {

    currentImage = currentImage - 1
    showImages()
})
next.addEventListener('click', ()=> {
  
    currentImage = currentImage + 1
    showImages()
})
setInterval(()=>{
    currentImage = currentImage + 1
    showImages() 
},5000)

showImages()





    const getRandonPokemon = async()=>{

        const url = 'https://pokeapi.co/api/v2/pokemon/' + Math.floor(Math.random() * 150)
        const response = await fetch(url)
        const pokemon = await response.json();
        return pokemon
    }
    const poke = await getRandonPokemon()
    const renderPokemon = (pokemon)=>{
        const img = document.createElement('img')
        const div = document.querySelector('#Image')
        img.src = pokemon.sprites.front_default
        img.alt = pokemon.name
        div.append(img)
    }

    renderPokemon(poke);

    const mybutton = document.querySelector('#b');
    const input = document.querySelector('#new-todo')
    const todoList = document.querySelector('.todo-list')


    const todos = JSON.parse(localStorage.getItem('todo-list')) || []

    const renderTodos = ()=>{
        todos.forEach((p)=>{
            const li = document.createElement('li')
            li.textContent = p.text
            todoList.append(li) 
        })
    }

    renderTodos();

    mybutton.addEventListener('click', ()=>{
        todos.push({ text: input.value, completed: false })
        todoList.innerHTML = ''
        localStorage.setItem('todo-list', JSON.stringify(todos))
        renderTodos()
    })

})()


