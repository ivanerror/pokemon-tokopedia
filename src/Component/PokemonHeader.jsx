import { Header, PageTitle, TotalOwned, StyledLink } from "../Component/styles";
const PokedexHeader = ({ title, total }) => {
  return (
    <Header>
      <PageTitle>{title}</PageTitle>
      <StyledLink to="/my-pokemon">
        <TotalOwned>
          <span>{total}</span> Owned
        </TotalOwned>
      </StyledLink>
    </Header>
  );
};

export default PokedexHeader;
