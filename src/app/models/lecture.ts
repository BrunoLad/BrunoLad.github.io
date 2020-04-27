import { Professor } from './professor';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

export interface Lecture {
    id: string,
    name: string,
    icon?: IconDefinition,
    professors?: Professor[],
}