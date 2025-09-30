import { faker } from "@faker-js/faker";

describe("Create Issue", () => {
  const issue = {
    title: `issue-${faker.datatype.uuid()}`,
    description: faker.random.words(5),
    project: {
      name: `project-${faker.datatype.uuid()}`,
      description: faker.random.words(7),
    },
  };

  beforeEach(() => {
    cy.api_deleteProjects()
    cy.login();
    cy.api_createProject(issue.project);
  });

  it("Sucefully", () => {
    cy.gui_createIssue(issue);

    cy.get(".issue-details")
      .should("contain", issue.title)
      .and("contain", issue.description);
  });
});
