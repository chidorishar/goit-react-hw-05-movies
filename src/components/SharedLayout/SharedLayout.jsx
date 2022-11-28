import { Container } from 'components/common/shared.styled';
import { Outlet } from 'react-router-dom';

import {
  Header,
  HeaderLink,
  LinksList,
  LinksListItem,
} from './SharedLayout.styled';

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
              <LinksListItem key={name}>
                <HeaderLink to={to}>{name}</HeaderLink>
              </LinksListItem>
            ))}
          </LinksList>
        </Container>
      </Header>

      <Outlet />
    </>
  );
}
