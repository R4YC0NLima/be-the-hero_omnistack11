const request = require("supertest");
const app = require("../../src/app");
const connection = require("../../src/app/database/connection");
describe("ONG", () => {
  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.destroy();
  });

  it("Should be able to create a new ONG", async () => {
    const response = await request(app)
      .post("/ongs")
      .send({
        name: "VirtualMax",
        email: "virtualmax2@gmail.com",
        whatsapp: "92994744860",
        city: "Manaus",
        uf: "AM"
      });

    expect(response.body).toHaveProperty("id");
    expect(response.body.id).toHaveLength(8);
  });
});
