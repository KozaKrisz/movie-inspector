import styled from 'styled-components';

const MovieList = styled.section`
  display: grid;
  grid-gap: 2em;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-auto-rows: 231px;
  padding: 2em;
`;

export { MovieList };
