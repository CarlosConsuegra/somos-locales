import { BookOpen, Clock, Trophy, TrendingUp } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Progress } from "./ui/progress"

export function Dashboard() {
  const stats = [
    {
      title: "Cursos Completados",
      value: "12",
      icon: Trophy,
      color: "text-green-600"
    },
    {
      title: "Cursos en Progreso",
      value: "4",
      icon: BookOpen,
      color: "text-blue-600"
    },
    {
      title: "Horas de Estudio",
      value: "127",
      icon: Clock,
      color: "text-purple-600"
    },
    {
      title: "Certificaciones",
      value: "8",
      icon: TrendingUp,
      color: "text-orange-600"
    }
  ]

  const currentCourses = [
    {
      title: "Desarrollo Web con React",
      progress: 75,
      nextLesson: "Hooks Avanzados"
    },
    {
      title: "Python para Data Science",
      progress: 40,
      nextLesson: "Análisis de Datos"
    },
    {
      title: "Diseño UX/UI",
      progress: 90,
      nextLesson: "Prototipado Final"
    }
  ]

  return (
    <div className="space-y-6">
      <div>
        <h2>Dashboard</h2>
        <p className="text-muted-foreground">
          Bienvenida de vuelta, María. Aquí está tu progreso de aprendizaje.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Cursos en Progreso</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {currentCourses.map((course) => (
              <div key={course.title} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>{course.title}</span>
                  <span>{course.progress}%</span>
                </div>
                <Progress value={course.progress} className="h-2" />
                <p className="text-xs text-muted-foreground">
                  Próxima lección: {course.nextLesson}
                </p>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Actividad Reciente</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Completaste "Introducción a React"</span>
                <span className="text-muted-foreground">Hace 2 días</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Nueva insignia: "Python Básico"</span>
                <span className="text-muted-foreground">Hace 3 días</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Iniciaste "Diseño UX/UI"</span>
                <span className="text-muted-foreground">Hace 1 semana</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}