import { Container } from 'components/common/shared.styled';
import { Outlet } from 'react-router-dom';
import { Header, HeaderLink, LinksList } from './SharedLayout.styled';

const LINKS = [
  { name: 'Home', to: '/' },
  { name: 'Movies', to: 'movies' },
];

export function SharedLayout(props) {
  return (
    <>
      <Header>
        <Container>
          <LinksList>
            {LINKS.map(({ to, name }) => (
              <HeaderLink to={to} key={name}>
                {name}
              </HeaderLink>
            ))}
          </LinksList>
        </Container>
      </Header>

      <Outlet />
    </>
  );
}
