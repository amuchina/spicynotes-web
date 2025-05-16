import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { ArrowRight } from "lucide-react"

const mockNotes = [
  {
    title: "Titolo",
    content: "Anteprima testooooo blablab lsadasfwfs fdsgsgss...",
    favorite: true,
  },
  {
    title: "Titolo",
    content: "Anteprima testooooo blablab lsadasfwfs fdsgsgss...",
    favorite: true,
  },
  {
    title: "Titolo",
    content: "Anteprima testooooo blablab lsadasfwfs fdsgsgss...",
    favorite: true,
  },{
    title: "Titolo",
    content: "Anteprima testooooo blablab lsadasfwfs fdsgsgss...",
    favorite: true,
  },{
    title: "Titolo",
    content: "Anteprima testooooo blablab lsadasfwfs fdsgsgss...",
    favorite: true,
  },{
    title: "Titolo",
    content: "Anteprima testooooo blablab lsadasfwfs fdsgsgss...",
    favorite: true,
  },
  {
    title: "Titolo",
    content: "Anteprima testooooo blablab lsadasfwfs fdsgsgss...",
    favorite: true,
  },
  {
    title: "Titolo",
    content:
      "Anteprima testooooo blablab lsadasfwfs fdsgsgss...Anteprima testooooo blablab lsadasfwfs fdsgsgss...Anteprima testooooo blablab lsadasfwfs fdsgsgss...",
    favorite: false,
  },
  {
    title: "Titolo",
    content:
      "Anteprima testooooo blablab lsadasfwfs fdsgsgss...Anteprima testooooo blablab lsadasfwfs fdsgsgss...Anteprima testooooo blablab lsadasfwfs fdsgsgss...",
    favorite: false,
  },
  {
    title: "Titolo",
    content:
      "Anteprima testooooo blablab lsadasfwfs fdsgsgss...Anteprima testooooo blablab lsadasfwfs fdsgsgss...Anteprima testooooo blablab lsadasfwfs fdsgsgss...",
    favorite: false,
  },
  {
    title: "Titolo",
    content:
      "Anteprima testooooo blablab lsadasfwfs fdsgsgss...Anteprima testooooo blablab lsadasfwfs fdsgsgss...Anteprima testooooo blablab lsadasfwfs fdsgsgss...",
    favorite: false,
  },
  {
    title: "Titolo",
    content:
      "Anteprima testooooo blablab lsadasfwfs fdsgsgss...Anteprima testooooo blablab lsadasfwfs fdsgsgss...Anteprima testooooo blablab lsadasfwfs fdsgsgss...",
    favorite: false,
  },
  {
    title: "Titolo",
    content:
      "Anteprima testooooo blablab lsadasfwfs fdsgsgss...Anteprima testooooo blablab lsadasfwfs fdsgsgss...Anteprima testooooo blablab lsadasfwfs fdsgsgss...",
    favorite: false,
  },
  {
    title: "Titolo",
    content:
      "Anteprima testooooo blablab lsadasfwfs fdsgsgss...Anteprima testooooo blablab lsadasfwfs fdsgsgss...Anteprima testooooo blablab lsadasfwfs fdsgsgss...",
    favorite: false,
  },
  // altri mock
]

export default function HomeNotesPage() {
  const favoriteNotes = mockNotes.filter((note) => note.favorite)
  const otherNotes = mockNotes.filter((note) => !note.favorite)

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Home</h1>
        <Button className="bg-red-600 hover:bg-red-700">Crea nota</Button>
      </div>

      <div className="space-y-4">
        <h2 className="text-sm text-muted-foreground">Preferiti</h2>
        <ScrollArea>
          <div className="flex gap-4 pb-4">
            {favoriteNotes.map((note, index) => (
              <Card key={index} className="min-w-[180px] w-48 h-auto">
                <CardContent className="p-4">
                  <h3 className="font-semibold">{note.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {note.content}
                  </p>
                </CardContent>
              </Card>
            ))}
            <Button variant="ghost" size="icon" className="mt-auto">
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>

      <div className="space-y-4">
        <h2 className="text-sm text-muted-foreground">Le mie note</h2>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {otherNotes.map((note, index) => (
            <Card key={index} className="h-auto">
              <CardContent className="p-4">
                <h3 className="font-semibold">{note.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {note.content}
                </p>
              </CardContent>
            </Card>
          ))}
          <Card className="flex items-center justify-center h-auto min-h-[100px]">
            <CardContent className="flex items-center justify-center p-4 w-full">
              <span className="text-muted-foreground text-base font-medium flex items-center gap-1">
                Vedi tutto <ArrowRight className="h-4 w-4" />
              </span>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
