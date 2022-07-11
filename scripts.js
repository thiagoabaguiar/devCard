const URL = 'https://api.github.com/users/thiagoabaguiar'

const profile = {
    name: '',
    following: 0,
    followers: 0,
    repositories: 0,
    company: '',
    location: '',
    avatar: ''
}
const colorBg = [ // array de cores disponíveis para seleção
    '#000000',
    '#23238E',
    '#FF0000',
    '#CFB53B',
    '#00FF00',
    '#2F4F4F',
    '#00009C',
    '#9370DB',
    '#0000FF',
    '#FF00FF',
    '#00FFFF',
    '#8257E5',
    '#330033',
    '#32CD99',
    '#999999',
    '#FF6600',
    '#006600',
    '#A8A8A8',
    '#5C3317',
    '#FFFF00',
    '#FFFFFF'
]
let colorBgIndex = 0

async function setProfile() {

    const responseAPI = await fetch(URL)
    const data = await responseAPI.json()

    profile.name = data.name
    profile.followers = data.followers
    profile.following = data.following
    profile.repositories = data.public_repos
    profile.company = data.company
    profile.location = data.location
    profile.avatar = data.avatar_url

    const cardName = document.getElementById('name')
    const cardFollowers = document.getElementById('qty_followers')
    const cardFollowing = document.getElementById('qty_following')
    const cardRepositories = document.getElementById('qty_repositories')
    const cardCompany = document.getElementById('company')
    const cardLocation = document.getElementById('location')
    const cardAvatar = document.getElementById('card_avatar')

    cardName.innerHTML = profile.name
    cardFollowers.innerHTML = `${profile.followers} seguidores`
    cardFollowing.innerHTML = `${profile.following} seguindo`
    cardRepositories.innerHTML = `${profile.repositories} repositórios`
    cardCompany.innerHTML = profile.company
    cardLocation.innerHTML = profile.location
    cardAvatar.src = profile.avatar

}

function changeColorBg() { // function invocada pelo botão id="button_gerar_bg"

    colorBgIndex += 1

    const cardBg = document.getElementById('card_bg')
    cardBg.style.backgroundColor = colorBg[colorBgIndex]

    const borderBg = document.getElementById('card_avatar')
    console.log(borderBg)
    borderBg.style.borderColor = colorBg[colorBgIndex]
    
    if (colorBgIndex === (colorBg.length-1)) {
        colorBgIndex = -1
    }

}

///////////////////////////////
setProfile()