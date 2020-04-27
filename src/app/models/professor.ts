import { Lecture } from "./lecture";

export interface Professor {
    id: string,
    name: string,
    gender: string,
    imagePath?: string,
    lectures?: Lecture[],
}