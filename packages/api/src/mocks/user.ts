import { http, HttpResponse } from "msw";
import { faker } from "@faker-js/faker";

export const userHandlers = [
  http.get("/api/v1/mocks/users/:id", ({ request, params }) => {
    const { id } = params;

    return HttpResponse.json({
      id: id,
      name: faker.person.fullName(),
      dob: faker.date.birthdate({ min: 18, max: 70, mode: "age" }),
      pan: faker.string.alphanumeric({ length: 10, casing: "upper" }),
      primaryPhone: "+91 - " + faker.string.numeric(10),
      secondaryPhone: "+91 - " + faker.string.numeric(10),
      gender: faker.person.sex(),
      email: faker.internet.email(),
      maritalStatus: Math.random() < 0.5 ? "Single" : "Married",
    });
  }),
];
