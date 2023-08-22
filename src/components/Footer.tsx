import { Link as RouterLink } from "react-router-dom";
import { styled } from "styled-components";
import FooterList from "./FooterList";
import { LinkedIn } from "iconoir-react";

const navRoutes = [
  "Móveis",
  "Eletrodomésticos",
  "Eletroportáteis",
  "TVs e Vídeo",
];

const filterRoutes = ["Novos", "Mais Vendidos", "Melhor Avaliados", "Todos"];

const companyRoutes = ["Sobre Nós", "Contato"];

const Wrapper = styled.footer`
  padding: 2.5rem 1.5rem;
  background-color: ${({ theme }) => theme.colors.text.primary};

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    padding: 4rem 5rem;
  }
`;

const FooterMenus = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
  border-bottom: 1px solid white;
  padding-bottom: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const Link = styled(RouterLink)`
  color: white;
  font-family: ${({ theme }) => theme.typography.font.heading};
  font-size: ${({ theme }) => theme.typography.heading.xxl};
  text-decoration: none;
`;

const FooterDetails = styled.div``;

const FooterSocials = styled.div`
  svg {
    width: 1.5rem;
    height: 1.5rem;
    color: white;
  }
`;

const IconLink = styled.a`
  color: white;
`;

const Footer = () => {
  return (
    <Wrapper>
      <FooterMenus>
        <FooterList routes={navRoutes} />
        <FooterList routes={filterRoutes} />
        <FooterList routes={companyRoutes} />
      </FooterMenus>
      <FooterDetails>
        <Link to="/">Avion</Link>
        <FooterSocials>
          <IconLink href="#">
            <LinkedIn />
          </IconLink>
          <svg
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.65 0H1.35C0.6 0 0 0.6 0 1.275V16.65C0 17.325 0.6 17.925 1.35 17.925H16.65C17.4 17.925 18 17.325 18 16.65V1.275C18 0.6 17.4 0 16.65 0ZM5.325 15.3H2.7V6.75H5.325V15.3ZM4.05 5.55C3.225 5.55 2.475 4.875 2.475 3.975C2.475 3.075 3.15 2.4 4.05 2.4C4.875 2.4 5.625 3.075 5.625 3.975C5.625 4.875 4.875 5.55 4.05 5.55ZM15.375 15.225H12.75V11.025C12.75 10.05 12.75 8.7 11.325 8.7C9.9 8.7 9.75 9.825 9.75 10.875V15.15H7.125V6.75H9.6V7.875H9.675C10.05 7.2 10.95 6.45 12.225 6.45C14.925 6.45 15.45 8.25 15.45 10.575V15.225H15.375Z"
              fill="currentColor"
            />
          </svg>
        </FooterSocials>
      </FooterDetails>
    </Wrapper>
  );
};

export default Footer;
