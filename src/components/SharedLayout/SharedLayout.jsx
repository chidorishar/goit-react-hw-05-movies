import { Container } from 'components/common/shared.styled';
import { Suspense } from 'react';
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

export default function SharedLayout() {
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

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
}
