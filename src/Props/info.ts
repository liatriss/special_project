import { professor } from './sectionProps'
import { teachingWeek } from './sectionProps'

export interface Info {
    sectionId: string,
    subjectID: string,
    subjectCode: string,
    totalStudents: number[] | null,
    degree: string,
    faculty: string,
    department: string,
    year: string,
    typeLearning: string,
    professor: professor[] | null,
    teachingWeek: teachingWeek[] | null,
    name: string,
    language: string,
    teachingDate: string,
    totalWeek: number,
    totalTeachload: number,
    teacherId: String

}