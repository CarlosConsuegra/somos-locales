import { Clock, Users, Star, Play } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { Progress } from "./ui/progress"
import { ImageWithFallback } from "./figma/ImageWithFallback"

interface CourseCardProps {
  id: string
  title: string
  description: string
  instructor: string
  duration: string
  students: number
  rating: number
  level: "Principiante" | "Intermedio" | "Avanzado"
  progress?: number
  image: string
  isEnrolled?: boolean
}

export function CourseCard({
  title,
  description,
  instructor,
  duration,
  students,
  rating,
  level,
  progress,
  image,
  isEnrolled = false
}: CourseCardProps) {
  const levelColors = {
    "Principiante": "bg-green-100 text-green-800",
    "Intermedio": "bg-yellow-100 text-yellow-800",
    "Avanzado": "bg-red-100 text-red-800"
  }

  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <CardHeader className="p-0">
        <div className="relative">
          <ImageWithFallback
            src={image}
            alt={title}
            className="h-48 w-full object-cover"
          />
          <Badge className={`absolute top-2 right-2 ${levelColors[level]}`}>
            {level}
          </Badge>
          {isEnrolled && progress !== undefined && (
            <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-2">
              <div className="text-white text-sm mb-1">Progreso: {progress}%</div>
              <Progress value={progress} className="h-2" />
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <h3 className="mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground mb-3">{description}</p>
        <div className="text-sm text-muted-foreground mb-2">Instructor: {instructor}</div>
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            {duration}
          </div>
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            {students.toLocaleString()}
          </div>
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            {rating}
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full" variant={isEnrolled ? "outline" : "default"}>
          {isEnrolled ? (
            <>
              <Play className="h-4 w-4 mr-2" />
              Continuar
            </>
          ) : (
            "Inscribirse"
          )}
        </Button>
      </CardFooter>
    </Card>
  )
}