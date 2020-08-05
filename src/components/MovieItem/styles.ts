import styled from 'styled-components';

const MovieItem = styled.div`
  background: ${({ bgUrl }: { bgUrl: string; onClick: Function }) =>
    `url(${bgUrl})`};
  background-size: cover;
  background-position: center center;
  border-radius: 0.5em;
  border: 2px solid #e1981a;
  cursor: pointer;
  transition: all 300ms linear;
  &:hover {
    transform: scale(1.1);
  }
  overflow: hidden;
`;

const MovieTitle = styled.h2`
  margin: 0;
  background: rgba(0, 0, 0, 0.5);
  font-size: 1rem;
  padding: 0.5em;
  color: #ffffff;
  font-weight: 400;
  user-select: none;
`;

export { MovieItem, MovieTitle };
