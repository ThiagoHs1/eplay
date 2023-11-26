import { HeaderBar, Links, LinksItem, LinkCart } from './styles'

import logo from '../../assets/images/logo.svg'
import carrinho from '../../assets/images/carrinho.svg'

const Header = () => (
  <HeaderBar>
    <div>
      <img src={logo} alt="logo" />
      <nav>
        <Links>
          <LinksItem>
            <a href="">Categorias</a>
          </LinksItem>
          <LinksItem>
            <a href="">Novidades</a>
          </LinksItem>
          <LinksItem>
            <a href="">Promoções</a>
          </LinksItem>
        </Links>
      </nav>
    </div>
    <LinkCart href="">
      0 - Produto(s)
      <img src={carrinho} alt="carrinho" />
    </LinkCart>
  </HeaderBar>
)

export default Header
