import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const Color = {
  red: "#ea5657",
  white: "#fbfffa",
  lightGreen: "#a3da91",
  green: "#a3da91",
  darkGreen: "#3a5a51",
};

const NavBar = styled.nav(
  {
    position: "fixed",
    left: 0,
    right: 0,
    backgroundColor: Color.white,
    zIndex: 100,
  },
  (props) => (props.bottom ? { bottom: 0 } : { top: 0 })
);

const NavbarWrapper = styled.div({
  backgroundColor: Color.white,
  display: "flex",
  justifyConten: "space-between",
  margin: "0 auto",
  width: "100%",
});

export const NavigationBar = (props) => {
  return (
    <NavBar bottom={props.bottom}>
      <NavbarWrapper bottom={props.bottom}>{props.children}</NavbarWrapper>
    </NavBar>
  );
};

const NavbarLogoWrapper = styled.div`
  padding: 0.5rem 1rem;
  width: 100%;

  img {
    height: 2.5rem;
  }
`;

export const NavbarLogo = ({ src }) => {
  return (
    <NavbarLogoWrapper>
      <img src={src} alt="" />
    </NavbarLogoWrapper>
  );
};

export const NavbarMenu = styled.img`
  height: 2.5rem;
  padding: 0.5rem 0.5rem;
  border-left: 1px solid #e5e5e5;
  cursor: pointer;
`;

export const NavbarButton = styled.button`
  margin: 0.5rem 1rem;
  padding: 0.5rem 0;
  width: 100%;
  border: 1px;
  border-radius: 40px;
  background-color: ${Color.red};
  color: ${Color.white};
  font-size: 1.2rem;
  font-weight: bold;
`;

const Content = styled.div`
  max-width: 100%;

  @media (min-width: 768px) {
    padding: 0 10vw;
  }
`;

const NavSpacer = styled.div`
  height: 4rem;
`;

export const ContentWrapper = (props) => {
  return (
    <Content>
      <NavSpacer />
      {props.children}
      <NavSpacer />
    </Content>
  );
};

export const PageTitle = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  margin: 0.5rem 0;
`;

const CheckBoxWrapper = styled.div`
  align-items: center;
  display: flex;
  padding: 0.5rem;
  min-width: 8rem;
  text-transform: capitalize;

  @media (max-width: 350px) {
    font-size: 0.8rem;
    min-width: 5rem;
  }

  label {
    padding-left: 0.5rem;
  }
`;

export const CheckBoxInput = ({ value, checked, onChange, label, name }) => {
  return (
    <CheckBoxWrapper>
      <input
        id={`cb-${name}-${value}`}
        type="checkbox"
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <label for={`cb-${name}-${value}`}>{label}</label>
    </CheckBoxWrapper>
  );
};

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0.3rem 0.6rem;
  border: 1px solid ${Color.red};
  margin: 0.5rem 0.5rem;
  border-radius: 1rem;
  background-color: ${Color.white};
`;

export const TotalOwned = styled.div`
  background-color: ${Color.red};
  color: ${Color.white};
  font-size: 0.8rem;
  font-weight: bold;
  border-radius: 0.5rem;
  padding: 0.5rem;
`;

export const List = styled.ul`
  width: 100%;
  list-style: none;
  padding: 0rem;
  height: 8rem;
  overflow-y: scroll;
`;

export const ListItem = styled.li`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const PokedexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 0.5rem;
  width: 100%;

  .poke-name {
    font-size: 1.2rem;
    font-weight: bold;
    padding-left: 0.5rem;
  }
`;

export const PokedexContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PokemonGroup = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid ${Color.red};
  border-radius: 0.5rem;
  margin: 0.5rem;
  align-items: center;
  background-color: ${Color.white};
`;

export const ReleaseButton = styled.div`
  display: flex;
  align-items: center;
  padding: 0 0.5rem;
  img {
    height: 0.8rem;
  }
`;

export const H4 = styled.h4`
  font-size: 1.2rem;
  font-weight: bold;
  text-transform: capitalize;
  margin: 0.5rem 0;
`;

export const P = styled.p`
  font-size: 1rem;
  margin: 0 0 0.5rem 0;
`;

export const DescContentWrapper = styled.div`
  border-bottom: 2px solid ${Color.red};
`;

export const PokemonDetailStyled = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-auto-columns: max-content
  justify-content: start;
  padding: 1rem;
  margin: 0 auto;
  max-width: 100%;

  @media (min-width: 768px) {
    grid-template-columns: auto auto;

  }

  img {
    width: 100%;
    height: 30rem;
    object-fit: contain;
  }
`;

export const PokeName = styled.div`
  background-color: ${Color.red};
  color: ${Color.white};
  text-transform: uppercase;
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  border-radius: 9999px;
  padding: 0.3 rem 2rem;
`;

export const DescWrapper = styled.div`
  flex-grow: 1;
  width: 100%;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const PokemonContainer = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-gap: 0.5rem;
  margin: 0 0.5rem;

  @media (min-width: 350px) {
    grid-template-columns: auto auto;
  }

  @media (min-width: 768px) {
    grid-template-columns: auto auto auto;
  }

  @media (min-width: 1000px) {
    grid-template-columns: auto auto auto auto;
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(6, 1fr);
  }
`;
