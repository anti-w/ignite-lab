import { useGetLessonsQuery } from "../../graphql/generated";
import { Lesson } from "../Lesson";

export const Sidebar = () => {
  const { data } = useGetLessonsQuery();

  return (
    <aside className="w-[348px] p-6 bg-gray-700 border-l border-gray-600">
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
        Cronograma das aulas
      </span>

      <div className="flex flex-col gap-8">
        {data?.lessons.map((lesson) => {
          return (
            <Lesson
              title={lesson.title}
              slug={lesson.slug}
              availableAt={new Date(lesson.availableAt)}
              type={lesson.lessonType}
              key={lesson.id}
            />
          );
        })}
      </div>
    </aside>
  );
};
