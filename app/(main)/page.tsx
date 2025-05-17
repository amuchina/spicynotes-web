import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { ArrowRight } from "lucide-react";

export default function HomeNotesPage() {
  const mockNotes = [
    {
      title: "Lista della spesa",
      content:
        "Latte, uova, pane, pomodori, pasta, detersivo, acqua frizzante.",
      favorite: true,
    },
    {
      title: "Idee per romanzo",
      content:
        "Protagonista con poteri legati ai sogni. Ambientazione post-apocalittica.",
      favorite: true,
    },
    {
      title: "Ricetta torta al cioccolato",
      content:
        "200g cioccolato fondente, 150g burro, 3 uova, 100g zucchero, 100g farina.",
      favorite: true,
    },
    {
      title: "Promemoria visita medica",
      content: "Martedì 21 alle 15:00, poliambulatorio via Roma.",
      favorite: true,
    },
    {
      title: "Frasi ispiratrici",
      content:
        "“Non aspettare il momento perfetto, cogli il momento e rendilo perfetto.”",
      favorite: false,
    },
    {
      title: "Progetto app mobile",
      content:
        "To-do list, sincronizzazione cloud, promemoria con notifiche push.",
      favorite: false,
    },
    {
      title: "Film da guardare",
      content:
        "Inception, Interstellar, Il diritto di contare, Parasite, La La Land.",
      favorite: false,
    },
    {
      title: "Allenamento settimanale",
      content: "Lunedì: corsa; Mercoledì: palestra; Venerdì: nuoto.",
      favorite: false,
    },
    {
      title: "Regali di compleanno",
      content: "Papà: libro; Sara: profumo; Luca: cuffie Bluetooth.",
      favorite: false,
    },
    {
      title: "Obiettivi del mese",
      content:
        "Leggere 2 libri, correre 30 km, risparmiare 100€, finire il corso online.",
      favorite: false,
    },
    {
      title: "Contatti utili",
      content:
        "Idraulico – Marco: 333 4567890; Elettricista – Paolo: 333 1234567.",
      favorite: false,
    },
    {
      title: "Appunti riunione lavoro",
      content:
        "Focus su user experience, scadenze entro fine mese, rivedere onboarding.",
      favorite: false,
    },
    {
      title: "Viaggio a Parigi",
      content:
        "Voli prenotati, hotel confermato, visitare Louvre, Tour Eiffel, Montmartre.",
      favorite: false,
    },
    {
      title: "Idee per startup",
      content:
        "Piattaforma per scambio oggetti usati. App per gestire bollette di gruppo.",
      favorite: false,
    },
    {
      title: "Libri da leggere",
      content:
        "“Sapiens”, “Il potere del subconscio”, “Il gabbiano Jonathan Livingston”.",
      favorite: false,
    },
    {
      title: "Corso di inglese",
      content:
        "Prossima lezione: giovedì ore 19. Ripassare verbi irregolari e listening.",
      favorite: false,
    },
    {
      title: "Decorazioni casa",
      content:
        "Nuove tende per il soggiorno, lampada da terra, pianta alta per l’angolo.",
      favorite: false,
    },
    {
      title: "Ricetta pasta al pesto",
      content: "Basilico, pinoli, aglio, parmigiano, olio EVO, sale, linguine.",
      favorite: false,
    },
    {
      title: "Budget mensile",
      content:
        "Entrate: 2000€; Spese: affitto 700€, bollette 150€, spesa 300€, extra 200€.",
      favorite: false,
    },
    {
      title: "Cose da fare domani",
      content:
        "Inviare email, ritirare pacco, pagare bolletta luce, chiamare nonna.",
      favorite: false,
    },
  ];

  const favoriteNotes = mockNotes.filter((note) => note.favorite);
  const otherNotes = mockNotes.filter((note) => !note.favorite);

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
                <p className="text-sm text-muted-foreground">{note.content}</p>
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
  );
}
