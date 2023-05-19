export default interface Title {
    id: string,
    title: string,
    degree: string,
    studentName: name[],
    advisorName: name[]
}

interface name {
    name: string
}