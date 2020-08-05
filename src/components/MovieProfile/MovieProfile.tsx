import React, { useState, useEffect } from 'react';
import {
  Movie,
  PropName,
  saveMovie,
  getMovies,
  SaveMode,
  deleteMovie,
} from '../../helpers/db';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import * as S from './styles';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../helpers/reducers';
import { SELECT_MOVIE, REFRESH_MOVIES } from '../MovieList/actions';

const MovieProfile: React.FC = () => {
  const [opened, setOpened] = useState(false);
  const movie: Movie | null = useSelector(
    (state: RootState) => state.selectedMovie
  );
  const [selectedMovie, setSelectedMovie] = useState(movie);
  const dispatch = useDispatch();

  useEffect(() => {
    if (movie) setOpened(true);
    setSelectedMovie(movie);
  }, [movie, dispatch]);

  useEffect(() => {
    if (!opened) {
      setTimeout(() => {
        dispatch({
          type: SELECT_MOVIE,
          payload: null,
        });
      }, 300);
    }
  }, [opened, dispatch]);

  const handleOnChangeData = (event: any, propName: PropName) => {
    const eventTarget = event?.target as HTMLInputElement;
    setSelectedMovie({
      ...selectedMovie,
      ...{ [propName]: eventTarget?.value },
    } as Movie);
  };

  const close = (): void => {
    setOpened(false);
    refreshMovies();
  };

  const save = (mode: SaveMode): void => {
    saveMovie(selectedMovie as Movie, mode);
    close();
  };

  const refreshMovies = async () => {
    const movies = await getMovies<Movie[]>();
    dispatch({
      type: REFRESH_MOVIES,
      payload: movies,
    });
  };

  return (
    <S.MovieProfile opened={opened} movie={selectedMovie}>
      <S.Wrapper>
        <S.CloseIcon>
          <FontAwesomeIcon
            onClick={close}
            style={{ color: 'white', fontSize: '1.2rem', cursor: 'pointer' }}
            icon={faTimesCircle}
          />
        </S.CloseIcon>
        <S.InputWrapper>
          <S.Label>{PropName.Abstract}</S.Label>
          <S.Textarea
            value={selectedMovie?.Abstract || ''}
            onChange={(e) => handleOnChangeData(e, PropName.Abstract)}
          >
            {selectedMovie?.Abstract}
          </S.Textarea>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>{PropName.AgeRating}</S.Label>
          <S.Input
            type="text"
            value={selectedMovie?.AgeRating || ''}
            onChange={(e) => handleOnChangeData(e, PropName.AgeRating)}
          />
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>{PropName.AvailabilityFromUtcIso}</S.Label>
          <S.Input
            type="text"
            value={selectedMovie?.AvailabilityFromUtcIso || ''}
            onChange={(e) =>
              handleOnChangeData(e, PropName.AvailabilityFromUtcIso)
            }
          />
        </S.InputWrapper>

        <S.InputWrapper>
          <S.Label>{PropName.BackgroundUrl}</S.Label>
          <S.Input
            type="text"
            value={selectedMovie?.BackgroundUrl || ''}
            onChange={(e) => handleOnChangeData(e, PropName.BackgroundUrl)}
          />
        </S.InputWrapper>

        <S.InputWrapper>
          <S.Label>{PropName.Cast}</S.Label>
          <S.Input
            type="text"
            value={selectedMovie?.Cast || ''}
            onChange={(e) => handleOnChangeData(e, PropName.Cast)}
          />
        </S.InputWrapper>

        <S.InputWrapper>
          <S.Label>{PropName.Category}</S.Label>
          <S.Input
            type="text"
            value={selectedMovie?.Category || ''}
            onChange={(e) => handleOnChangeData(e, PropName.Category)}
          />
        </S.InputWrapper>

        <S.InputWrapper>
          <S.Label>{PropName.Director}</S.Label>
          <S.Input
            type="text"
            value={selectedMovie?.Director || ''}
            onChange={(e) => handleOnChangeData(e, PropName.Director)}
          />
        </S.InputWrapper>

        <S.InputWrapper>
          <S.Label>{PropName.EditedAbstract}</S.Label>
          <S.Textarea
            value={selectedMovie?.EditedAbstract}
            onChange={(e) => handleOnChangeData(e, PropName.EditedAbstract)}
          >
            {selectedMovie?.EditedAbstract}
          </S.Textarea>
        </S.InputWrapper>

        <S.InputWrapper>
          <S.Label>{PropName.Genre}</S.Label>
          <S.Input
            type="text"
            value={selectedMovie?.Genre || ''}
            onChange={(e) => handleOnChangeData(e, PropName.Genre)}
          />
        </S.InputWrapper>

        <S.InputWrapper>
          <S.Label>{PropName.Name}</S.Label>
          <S.Input
            type="text"
            value={selectedMovie?.Name || ''}
            onChange={(e) => handleOnChangeData(e, PropName.Name)}
          />
        </S.InputWrapper>

        <S.InputWrapper>
          <S.Label>{PropName.ProductionYear}</S.Label>
          <S.Input
            type="text"
            value={selectedMovie?.ProductionYear || ''}
            onChange={(e) => handleOnChangeData(e, PropName.ProductionYear)}
          />
        </S.InputWrapper>
        <S.Button type="button" onClick={() => save(SaveMode.Update)}>
          Save
        </S.Button>
        <S.Button type="button" onClick={() => save(SaveMode.Create)}>
          Save as a new movie
        </S.Button>
        <S.Button
          type="button"
          onClick={() => {
            deleteMovie(selectedMovie as Movie);
            close();
          }}
        >
          Delete
        </S.Button>
      </S.Wrapper>
    </S.MovieProfile>
  );
};

export default MovieProfile;
