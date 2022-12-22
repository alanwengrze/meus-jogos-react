import { useState } from 'react'
import './styles/Style.css'
import { FaInstagram, FaGithub } from 'react-icons/fa'

import Header from './components/Header'
import Section from './components/Section'
import ListItem from './components/ListItem'

//estrutura de dados
const gamesListData = [
  {
    url: "https://www.twitch.tv/directory/game/League%20of%20Legends",
    src:"https://static-cdn.jtvnw.net/ttv-boxart/21779-188x250.jpg",
    alt:"Imagem do jogo League of Legends",
  },

  {
    url:"https://www.twitch.tv/directory/game/VALORANT",
    src:"https://static-cdn.jtvnw.net/ttv-boxart/516575-188x250.jpg",
    alt:"Imagem do jogo Valorant",
  },

  {
    url:"https://www.twitch.tv/directory/game/Teamfight%20Tactics",
    src:"https://static-cdn.jtvnw.net/ttv-boxart/513143-188x250.jpg",
    alt:"Imagem do jogo TFT",
  },
]

const channelListData = [
  {
    url: "https://www.twitch.tv/alanzoka",
    src:"https://static-cdn.jtvnw.net/jtv_user_pictures/15cec952-c1ba-4ff8-a79c-53c2fa5bd269-profile_image-70x70.png",
    alt:"Canal do Alanzoka",
  },

  {
    url:"https://www.twitch.tv/kennzy",
    src:"https://static-cdn.jtvnw.net/jtv_user_pictures/b417a2df-b224-4869-adc6-61951b5f0d9a-profile_image-70x70.png",
    alt:"Canal do Kennzy",
  },

  {
    url:"https://www.twitch.tv/jonvlogs",
    src:"https://static-cdn.jtvnw.net/jtv_user_pictures/293a4ebf-ab23-4fe1-9618-ed03de924c7e-profile_image-70x70.png",
    alt:"Canal do JonVlogs",
  },

]

const socialListData = [
  {
    url: "https://www.instagram.com/al.wng/",
    src:"../assets/instagram.svg",
    alt:"Meu Instagram",
  },

  {
    url:"https://twitter.com/alnwngg",
    src:"../assets/twitter.svg",
    alt:"Meu Twitter",
  },


]

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* Incluir header aqui */}
      <Header />

      {/* Incluir main aqui */}
      <main>
      {/* Incluir sections aqui */}
      <Section
        title="Meus jogos"
        subtitle="Os games que eu mais curto jogar!"
        className="games-list"
      >

      {
        gamesListData.map(function(item){
          return(
            <ListItem
            url={item.url}
            src={item.src}
            alt={item.alt}
          />
          )
        })
      }

      </Section>


      <Section
        title="Canais e streamers"
        subtitle="Lista de canais e transmissões que não perco!"
        className="channel-list"
      >

      {
        channelListData.map(function(item) {
          return(
            <ListItem
            url={item.url}
            src={item.src}
            alt={item.alt}
            />
          )
        })
      }

      </Section>

      <Section
        title="Minhas redes"
        subtitle="Se conecte comigo agora mesmo!"  
        className="social-list"
      >

{
        socialListData.map(function(item) {
          return(
            <ListItem
            url={item.url}
            src={item.src}
            alt={item.alt}
            />
          )
        })
      }

      </Section>
      
      </main>

      
    </div>
  )
}

export default App
