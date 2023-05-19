
export interface teachingWeek {
    name:string,
    teacherId:string[] | null
}

export interface professor {
    teacherId: number,
    name: string
}

export interface section {
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
    teachingWeek: teachingWeek[] | null
}