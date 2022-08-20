import handler from "pages/api/roles/index";
import { createAuthenticatedMocks } from "__tests__/helpers";
import { setupAllTestData } from "__tests__/setup-test-data";

describe("/api/roles/index", () => {
  beforeAll(async () => {
    await setupAllTestData(["roles"]);
  });

  it("should list all roles", async () => {
    const { req, res } = createAuthenticatedMocks({
      method: "GET",
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(200);
    expect(res._getJSONData()).toMatchInlineSnapshot(`
      Array [
        Object {
          "label": "Some Admin Permissions",
          "value": "some-admin-permissions",
        },
        Object {
          "label": "View All Data Only",
          "value": "view-all-data-only",
        },
        Object {
          "label": "Creator",
          "value": "creator",
        },
        Object {
          "label": "Viewer",
          "value": "viewer",
        },
      ]
    `);
  });

  it("should create new role", async () => {
    const postRequest = createAuthenticatedMocks({
      method: "POST",
      body: {
        name: "New Role",
      },
    });

    await handler(postRequest.req, postRequest.res);

    expect(postRequest.res._getStatusCode()).toBe(201);

    const { req, res } = createAuthenticatedMocks({
      method: "GET",
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(200);
    expect(res._getJSONData()).toHaveLength(5);
    expect(res._getJSONData()[2]).toMatchInlineSnapshot(`
      Object {
        "label": "New Role",
        "value": "new-role",
      }
    `);
  });
});