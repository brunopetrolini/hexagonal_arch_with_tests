import axios from "axios";

test("deve testar a API", async () => {
  const response = await axios.get("http://localhost:3000/cards/1234/invoices");
  const output = response.data;
  expect(output.total).toBe(775);
});
