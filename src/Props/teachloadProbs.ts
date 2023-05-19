
export interface teachLoad {
    teacherId: string,
    subjectId: string,
    totalWeek: number,
    totalTeachload: number
}

export interface teachloadChecked {
    teacherId: string,
    name: string,
    financeChecked: boolean,
    headOfTeacherChecked: boolean,
    regChecked: boolean,
    hrChecked: boolean,
    teacherChecked: boolean,
}