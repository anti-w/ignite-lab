import { CheckCircle, Lock } from "phosphor-react";
import { format, isPast } from "date-fns";
import { Link, useParams } from "react-router-dom";
import { ptBR } from "date-fns/locale";

interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: "live" | "class";
}

export const Lesson = (props: LessonProps) => {
  const { slug } = useParams<{ slug: string }>();

  const isLessonAvaliable = isPast(props.availableAt);
  const availableDateFormatted = format(
    props.availableAt,
    "EEEE' • 'd' de 'MMMM' • 'k'h'mm",
    {
      locale: ptBR,
    }
  );

  const isActiveLesson = slug === props.slug;

  return (
    <Link to={`/event/lesson/${props.slug}`} className="group">
      <span className="text-gray-300">{availableDateFormatted}</span>

      <div
        className={`rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500 ${
          isActiveLesson && "bg-green-500"
        }`}
      >
        <header className="flex items-center justify-between">
          {isLessonAvaliable ? (
            <span
              className={` flex items-center gap-2 text-sm text-blue-500 font-medium ${
                isActiveLesson && "text-white"
              }`}
            >
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>
          ) : (
            <span className=" flex items-center gap-2 text-sm text-orange-500 font-medium">
              <Lock size={20} />
              Em Breve
            </span>
          )}
          <span
            className={`text-xs rounded px-2 py-[2px] text-white border ${
              isActiveLesson ? "border-white" : "border-green-300 font-bold"
            }`}
          >
            {props.type === "live" ? "AO VIVO" : "AULA PRÁTICA"}
          </span>
        </header>
        <strong
          className={` mt-5 block ${
            isActiveLesson ? "text-white" : "text-gray-200"
          }`}
        >
          {props.title}
        </strong>
      </div>
    </Link>
  );
};
