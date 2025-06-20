import { useState } from "react"
import { Search, Filter } from "lucide-react"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import { CourseCard } from "./CourseCard"

const categories = [
  "Todos",
  "Desarrollo Web",
  "Data Science",
  "Diseño",
  "Marketing",
  "Idiomas",
  "Negocios"
]

const courses = [
  {
    id: "1",
    title: "Desarrollo Web Completo con React",
    description: "Aprende React desde cero hasta proyectos avanzados con hooks, context y más.",
    instructor: "Carlos Mendoza",
    duration: "12 semanas",
    students: 1250,
    rating: 4.8,
    level: "Intermedio" as const,
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop",
    progress: 75,
    isEnrolled: true
  },
  {
    id: "2",
    title: "Python para Data Science",
    description: "Domina Python y sus librerías más importantes para análisis de datos.",
    instructor: "Ana Rodríguez",
    duration: "8 semanas",
    students: 980,
    rating: 4.9,
    level: "Principiante" as const,
    image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=300&fit=crop",
    progress: 40,
    isEnrolled: true
  },
  {
    id: "3",
    title: "Diseño UX/UI Profesional",
    description: "Crea interfaces atractivas y funcionales siguiendo las mejores prácticas.",
    instructor: "Laura González",
    duration: "10 semanas",
    students: 750,
    rating: 4.7,
    level: "Intermedio" as const,
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop",
    progress: 90,
    isEnrolled: true
  },
  {
    id: "4",
    title: "Marketing Digital Avanzado",
    description: "Estrategias modernas de marketing digital y growth hacking.",
    instructor: "Pedro Morales",
    duration: "6 semanas",
    students: 620,
    rating: 4.6,
    level: "Avanzado" as const,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop"
  },
  {
    id: "5",
    title: "Inglés Conversacional",
    description: "Mejora tu fluidez en inglés con conversaciones prácticas y reales.",
    instructor: "Sarah Johnson",
    duration: "16 semanas",
    students: 2100,
    rating: 4.9,
    level: "Intermedio" as const,
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop"
  },
  {
    id: "6",
    title: "Emprendimiento y Startup",
    description: "Aprende a crear y escalar tu propio negocio desde cero.",
    instructor: "Miguel Torres",
    duration: "14 semanas",
    students: 850,
    rating: 4.5,
    level: "Avanzado" as const,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop"
  }
]

export function ExploreCourses() {
  const [selectedCategory, setSelectedCategory] = useState("Todos")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredCourses = courses.filter(course => {
    const matchesCategory = selectedCategory === "Todos" || 
      course.title.toLowerCase().includes(selectedCategory.toLowerCase()) ||
      course.description.toLowerCase().includes(selectedCategory.toLowerCase())
    
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchQuery.toLowerCase())
    
    return matchesCategory && matchesSearch
  })

  return (
    <div className="space-y-6">
      <div>
        <h2>Explorar Cursos</h2>
        <p className="text-muted-foreground">
          Descubre nuevos cursos y amplía tus conocimientos.
        </p>
      </div>

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Buscar cursos..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        <Button variant="outline" className="flex items-center gap-2">
          <Filter className="h-4 w-4" />
          Filtros
        </Button>
      </div>

      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <Badge
            key={category}
            variant={selectedCategory === category ? "default" : "secondary"}
            className="cursor-pointer"
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </Badge>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredCourses.map((course) => (
          <CourseCard key={course.id} {...course} />
        ))}
      </div>
    </div>
  )
}