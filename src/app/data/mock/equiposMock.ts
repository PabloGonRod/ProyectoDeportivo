import { Partido } from "./partidosData";

export interface Equipo {
  id: string,
  nombre: string,
  partidos: Partido[];
}

export const EQUIPOS_MOCK: Equipo[] = [
  {
    id: "RMADRID",
    nombre: "Real Madrid",
    partidos: [
      {
        id: 1,
        idLocal: "RMADRID",
        idVisitante: "RSOCIEDAD",
        fecha: "16-02-2024",
        goles: [
          {
            idParticipante: "RMADRID",
            minuto: "36",
          },
          {
            idParticipante: "RMADRID",
            minuto: "56",
          }
        ],
        tarjetas: [
          {
            idParticipante: "RMADRID",
            tipoTarjeta: "AMARILLA",
            minuto: "74",
          },
          {
            idParticipante: "RSOCIEDAD",
            tipoTarjeta: "AMARILLA",
            minuto: "82",
          }
        ]
      },
    ]
  },
  {
    id: "BETIS",
    nombre: "Real Betis Balompie",
    partidos: [
      {
        id: 2,
        idLocal: "BETIS",
        idVisitante: "GRANADA",
        fecha: "16-02-2024",
        goles: [
          {
            idParticipante: "BETIS",
            minuto: "36",
          },
          {
            idParticipante: "GRANADA",
            minuto: "56",
          }
        ],
        tarjetas: [
          {
            idParticipante: "GRANADA",
            tipoTarjeta: "AMARILLA",
            minuto: "74",
          },
          {
            idParticipante: "BETIS",
            tipoTarjeta: "AMARILLA",
            minuto: "82",
          }
        ]
      },
    ]
  },
  {
    id: "GET",
    nombre: "Getafe",
    partidos: [
      {
        id: 3,
        idLocal: "GETAFE",
        idVisitante: "VILLAREAL",
        fecha: "16-02-2024",
        goles: [
          {
            idParticipante: "GETAFE",
            minuto: "23",
          },
          {
            idParticipante: "VILLAREAL",
            minuto: "55",
          }
        ],
        tarjetas: [
          {
            idParticipante: "VILLAREAL",
            tipoTarjeta: "AMARILLA",
            minuto: "37",
          },
        ]
      },
    ]
  },
  {
    id: "FCBAR",
    nombre: "FC Barcelona",
    partidos: [
      {
        id: 4,
        idLocal: "FCBAR",
        idVisitante: "ATHBILB",
        fecha: "22-02-2024",
        goles: [
          {
            idParticipante: "ATHBILB",
            minuto: "53",
          },
        ],
        tarjetas: [
          {
            idParticipante: "FCBAR",
            tipoTarjeta: "AMAIRLLA",
            minuto: "32",
          }
        ]
      },
    ]
  },
];
