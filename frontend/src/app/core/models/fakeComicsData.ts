
import { Comic } from "./comic.type";

export const comics: Comic[] = [
    {
        id: '1',
        name: 'Pirating',
        description: 'Captain NB remembering the good old days.',
        releaseDate: new Date("Fri Aug 30 2024 11:00:00"),
        filePath: "/assets/comics/pirating.jpg",
        views: 5,
    },
    {
        id: '2',
        name: 'Found',
        description: "He needs to think she's there.",
        releaseDate: new Date("Fri Aug 30 2024 11:00:00"),
        filePath: "/assets/comics/found.jpg",
        views: 15,
    },
    {
        id: '3',
        name: 'Knowing',
        description: "Captain NB trying to hide his mysterious origins.",
        releaseDate: new Date("Fri Aug 30 2024 12:00:00"),
        filePath: "/assets/comics/knowing.jpg",
        views: 10,
    },
    {
        id: '4',
        name: 'Looking',
        description: 'Captain NB is nowhere to be seen.',
        releaseDate: new Date("Fri Aug 30 2024 09:00:00"),
        filePath: "/assets/comics/looking.jpg",
        views: 1,
    },
]