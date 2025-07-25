import { db } from "./db";
import { events, customers } from "@shared/schema";

async function seedDatabase() {
  console.log("Seeding database...");
  
  try {
    // Seed events
    await db.insert(events).values([
      {
        name: "Maratona de São Paulo 2024",
        date: "2024-12-15",
        time: "06:00",
        location: "Parque Ibirapuera",
        city: "São Paulo",
        state: "SP",
        participants: 12000,
        available: true,
      },
      {
        name: "Corrida de Rua Rio 2024",
        date: "2024-12-22",
        time: "07:00",
        location: "Copacabana",
        city: "Rio de Janeiro",
        state: "RJ",
        participants: 8000,
        available: true,
      },
      {
        name: "Meia Maratona BH",
        date: "2024-12-28",
        time: "06:30",
        location: "Lagoa da Pampulha",
        city: "Belo Horizonte",
        state: "MG",
        participants: 5000,
        available: false,
      },
    ]).onConflictDoNothing();

    // Seed customers
    await db.insert(customers).values([
      {
        name: "João Silva Santos",
        cpf: "12345678901",
        birthDate: "1990-05-15",
        email: "joao.silva@email.com",
        phone: "(11) 99999-1234",
      },
      {
        name: "Maria Oliveira Costa",
        cpf: "98765432100",
        birthDate: "1985-03-20",
        email: "maria.oliveira@email.com",
        phone: "(21) 98888-5678",
      },
    ]).onConflictDoNothing();

    console.log("Database seeded successfully!");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
}

// Run seed function
seedDatabase().catch(console.error);