import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Movie extends Document {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  releaseDate: Date;

  @Prop({ required: true })
  genre: string;
}
export const MovieModel = SchemaFactory.createForClass(Movie);
export type MovieDocument = Movie & Document;

