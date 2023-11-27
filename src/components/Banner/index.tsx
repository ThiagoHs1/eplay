/* eslint-disable react/no-unescaped-entities */
import { Imagem, Titulo, Precos } from './styles'

import bannerImg from '../../assets/images/banner-homem-aranha.png'

const banner = () => (
  <Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
    <div className="Container">
      <Titulo>Marvel's Spider-Man: Mires Morales PS4 & PS5</Titulo>
      <Precos>
        De <span>R$ 250,00</span> <br /> por R$ 99,90
      </Precos>
    </div>
  </Imagem>
)

export default banner
