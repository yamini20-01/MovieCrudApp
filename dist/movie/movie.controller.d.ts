import { MovieService } from './movie.service';
import { Movie } from './movie.model';
export declare class MovieController {
    private readonly movieService;
    constructor(movieService: MovieService);
    findAll(): Promise<Movie[]>;
    findOne(id: string): Promise<Movie>;
    create(createMovieDto: any): Promise<Movie>;
    update(id: string, updateMovieDto: any): Promise<Movie>;
    remove(id: string): Promise<Movie>;
}
