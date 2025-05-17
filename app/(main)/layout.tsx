// app/layout.tsx
import "./globals.css";
import type { ReactNode } from "react";
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarContent,
  SidebarGroup,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
  SidebarFooter,
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar"; // adattalo al tuo path
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { GalleryVerticalEnd } from "lucide-react";
import { NavUser } from "@/components/nav-user";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { HiCog6Tooth, HiInboxStack } from "react-icons/hi2";

const data = {
  navMain: [
    {
      title: "Recenti",
      url: "#",
      items: [
        {
          title: "Ricetta Besciamella",
          url: "#",
        },
        {
          title: "Impasto Lasagne",
          url: "#",
        },
        {
          title: "Lista della spesa",
          url: "#",
        },
        {
          title: "Codice cassaforte",
          url: "#",
        },
        {
          title: "Credenziali",
          url: "#",
        },
      ],
    },
    {
      title: "Preferiti",
      url: "#",
      items: [
        {
          title: "TODO List",
          url: "#",
        },
        {
          title: "Diario Personale",
          url: "#",
          isActive: true,
        },
      ],
    },
    {
      title: "Cartelle",
      url: "#",
      items: [
        {
          title: "Cucina",
          url: "#",
        },
        {
          title: "Motivazionali",
          url: "#",
        },
        {
          title: "Scuola",
          url: "#",
        },
      ],
    },
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="it">
      <body className="flex min-h-screen">
        <SidebarProvider>
          <Sidebar>
            {/* Sidebar Header */}
            <SidebarHeader>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton size="lg" asChild>
                    <a href="#">
                      <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                        <GalleryVerticalEnd className="size-4" />
                      </div>
                      <div className="flex flex-col gap-0.5 leading-none">
                        <span className="font-semibold">Spicy Notes</span>
                        <span className="">v1.0.0</span>
                      </div>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarHeader>

            {/* Sidebar Content */}
            <SidebarContent>
              <SidebarGroup>
                <SidebarMenu>
                  {data.navMain.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild>
                        <a href={item.url} className="font-medium">
                          {item.title}
                        </a>
                      </SidebarMenuButton>
                      {item.items?.length ? (
                        <SidebarMenuSub>
                          {item.items.map((subItem) => (
                            <SidebarMenuSubItem key={subItem.title}>
                              <SidebarMenuSubButton
                                asChild
                                isActive={subItem.isActive}
                              >
                                <a href={subItem.url}>{subItem.title}</a>
                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                          ))}
                        </SidebarMenuSub>
                      ) : null}
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroup>
            </SidebarContent>

            {/* Sidebar Footer */}
            <SidebarFooter>
              <NavUser user={{ name: "matte", email: "m@m.it", avatar: "" }} />
            </SidebarFooter>

            <SidebarRail />
          </Sidebar>

          {/* Main Content */}
          <div className="flex flex-col w-full">
            {/* Header */}
            <header className="flex h-16 shrink-0 items-center gap-2 border-b px-3">
              <SidebarTrigger />
              <Separator orientation="vertical" className="mr-2 h-4" />
              <div className="flex flex-row justify-center gap-2 w-full">
                <Input
                  className="w-full"
                  type="search"
                  placeholder="Ask AI ✨ ..."
                />
                <Button variant={"ghost"}>
                  <HiInboxStack className="size-6" />
                </Button>
                <Button variant={"ghost"}>
                  <HiCog6Tooth className="size-6" />
                </Button>
              </div>
            </header>

            {/* Page Content */}
            <main className="flex-1 p-4">{children}</main>
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}
