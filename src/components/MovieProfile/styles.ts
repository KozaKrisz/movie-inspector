import styled from 'styled-components';
import { Movie } from '../../helpers/db';

const MovieProfile = styled.section`
  position: absolute;
  top: 0;
  transform: ${({ opened }: { opened: boolean; movie: Movie | null }) => {
    if (opened) {
      return 'translateX(0)';
    }
    return 'translateX(-100%)';
  }};
  width: 100%;
  height: 100%;
  background: ${({ movie }: { opened: boolean; movie: Movie | null }) => {
    if (movie?.BackgroundUrl) {
      return `url(${movie?.BackgroundUrl})`;
    }
    return 'none';
  }};
  background-size: cover;
  background-position: center center;
  transition: all 375ms linear;
  padding: 1em;
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 678px;
  height: 100%;
  overflow-y: auto;
  background: rgba(0, 0, 0, 0.6);
  margin: 0 auto;
  padding: 1em;
`;

const CloseIcon = styled.div`
  text-align: right;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  & + & {
    margin-top: 1em;
  }
`;

const Label = styled.label`
  color: #ffffff;
  margin-bottom: 0.5em;
`;

const Input = styled.input`
  width: 100%;
  background-color: #333;
  padding: 0.3em 0.5em;
  color: #ffffff;
  border: 0;
  border-bottom: 2px solid #e1981a;
  font-family: inherit;
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 100px;
  resize: none;
  background-color: #333;
  padding: 0.3em 0.5em;
  color: #ffffff;
  border: 0;
  border-bottom: 2px solid #e1981a;
  font-family: inherit;
`;

const Button = styled.button`
  margin: 1em;
  border: 2px solid #e1981a;
  box-shadow: 0 0 0 1px #e1981a inset;
  background-color: #e1981a;
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
  &:active {
    background-color: #059;
  }
`;

export {
  MovieProfile,
  Wrapper,
  CloseIcon,
  InputWrapper,
  Input,
  Label,
  Textarea,
  Button,
};
