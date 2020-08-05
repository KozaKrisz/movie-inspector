import axios from 'axios';

export type Movie = {
  [index: string]: any;
  Abstract: string;
  AgeRating: number;
  AvailabilityFromUtcIso: string;
  BackgroundUrl: string;
  Cast: string;
  Category: string;
  Director: string;
  EditedAbstract: string;
  Genre: string;
  Id: string;
  Name: string;
  ProductionYear: number;
};

export enum PropName {
  Abstract = 'Abstract',
  AgeRating = 'AgeRating',
  AvailabilityFromUtcIso = 'AvailabilityFromUtcIso',
  BackgroundUrl = 'BackgroundUrl',
  Cast = 'Cast',
  Category = 'Category',
  Director = 'Director',
  EditedAbstract = 'EditedAbstract',
  Genre = 'Genre',
  Id = 'Id',
  Name = 'Name',
  ProductionYear = 'ProductionYear',
}

export enum SaveMode {
  Update = 'Update',
  Create = 'Create',
}

const getMovies = async <T>(): Promise<T> => {
  const response = await axios({ method: 'GET', url: '/api/movies' });
  return response.data;
};

const saveMovie = (selectedMovie: Movie, mode: SaveMode) => {
  if (mode === SaveMode.Update) {
    fetch(`/api/movies/${selectedMovie?.Id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(selectedMovie),
    });
  }
  if (mode === SaveMode.Create) {
    fetch(`/api/movies`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(selectedMovie),
    });
  }
};

const deleteMovie = (selectedMovie: Movie) => {
  fetch(`/api/movies`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(selectedMovie),
  });
};

export { getMovies, saveMovie, deleteMovie };
