export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

export enum SortType {
  Name,
  Surname,
  Age,
  Married,
  AverageGrade,
}

export type SortOrder = 'asc' | 'desc';

const averGrade = (student: Student): number => {
  const everSum = student.grades.reduce(
    (sum: number, cur: number) => sum + cur, 0,
  );
  const { length } = student.grades;

  return everSum / length;
};

export function sortStudents(
  students: Array<Student>,
  sortBy: SortType,
  order: SortOrder,
): Array<Student> {
  const isOrdered: number = (order === 'asc' ? 1 : -1);

  return [...students].sort((a: Student, b: Student) => {
    switch (sortBy) {
      case SortType.Name:
        return a.name.localeCompare(b.name) * isOrdered;

      case SortType.Surname:
        return a.surname.localeCompare(b.surname) * isOrdered;

      case SortType.Age:
        return (a.age - b.age) * isOrdered;

      case SortType.Married:
        return ((+a.married) - (+b.married)) * isOrdered;

      case SortType.AverageGrade:
        return (averGrade(a) - averGrade(b)) * isOrdered;

      default:
        return 0;
    }
  });
}
