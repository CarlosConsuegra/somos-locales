import { Calendar, BookOpen, Users, BarChart3, Settings, Trophy, User } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from "./ui/sidebar"

const navigation = [
  {
    title: "Dashboard",
    url: "#",
    icon: BarChart3,
  },
  {
    title: "Mis Cursos",
    url: "#",
    icon: BookOpen,
  },
  {
    title: "Explorar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Certificaciones",
    url: "#",
    icon: Trophy,
  },
  {
    title: "Comunidad",
    url: "#",
    icon: Users,
  }
]

const settings = [
  {
    title: "Configuración",
    url: "#",
    icon: Settings,
  },
  {
    title: "Perfil",
    url: "#",
    icon: User,
  }
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center gap-2 px-4 py-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <BookOpen className="h-4 w-4" />
          </div>
          <span className="text-lg font-semibold">Capacitación</span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navegación</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigation.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Configuración</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {settings.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div className="flex items-center gap-2 px-4 py-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted">
            <User className="h-4 w-4" />
          </div>
          <div className="text-sm">
            <div>María García</div>
            <div className="text-muted-foreground">Estudiante</div>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}