import { Header, PageTitle, TotalOwned, StyledLink } from "../Component/styles";
import { Link } from "react-router-dom";

const PokedexHeader = ({ title, total }) => {
  return (
    <Header>
      <PageTitle>{title}</PageTitle>
      <StyledLink as={Link} to="/my-pokemon">
        <TotalOwned data-testid="owned">
          <span>{total}</span> Owned
        </TotalOwned>
      </StyledLink>
    </Header>
  );
};

export default PokedexHeader;
