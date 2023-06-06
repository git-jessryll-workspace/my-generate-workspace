import generatePassword from "./../index";
test("Description", () => {
  expect(generatePassword(14).length).toBe(14);
});
