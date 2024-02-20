export interface Partido {
  id: number
  idLocal: string;
  idVisitante: string;
  fecha: string;
  goles: Gol[];
  tarjetas: Tarjeta[];
}

export interface Gol {
  idParticipante: string;
  minuto: string;
}

export interface Tarjeta {
  idParticipante: string;
  tipoTarjeta: string;
  minuto: string;
}

export const DATOS_DEPORTES: Partido[] = [
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
  {
    id: 2,
    idLocal: "BETIS",
    idVisitante: "GRANADA",
    fecha: "24-02-2024",
    goles: [
      {
        idParticipante: "GRANADA",
        minuto: "36",
      },
      {
        idParticipante: "BETIS",
        minuto: "12",
      },
      {
        idParticipante: "BETIS",
        minuto: "19",
      },
      {
        idParticipante: "BETIS",
        minuto: "34",
      },
      {
        idParticipante: "BETIS",
        minuto: "49",
      },
      {
        idParticipante: "GRANADA",
        minuto: "76",
      },
      {
        idParticipante: "GRANADA",
        minuto: "88",
      },
      {
        idParticipante: "GRANADA",
        minuto: "89",
      },
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
      },
      {
        idParticipante: "BETIS",
        tipoTarjeta: "ROJA",
        minuto: "89",
      }
    ]
  },
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
  {
    id: 4,
    idLocal: "FCBAR",
    idVisitante: "ATHBILB",
    fecha: "17-02-2024",
    goles: [
      {
        idParticipante: "FCBAR",
        minuto: "14",
      },
      {
        idParticipante: "ATHBILB",
        minuto: "25",
      },
      {
        idParticipante: "ATHBILB",
        minuto: "72",
      }
    ],
    tarjetas: [
      {
        idParticipante: "FCBAR",
        tipoTarjeta: "AMARILLA",
        minuto: "23",
      },
      {
        idParticipante: "FCBAR",
        tipoTarjeta: "AMARILLA",
        minuto: "47",
      }
    ]
  },
];
