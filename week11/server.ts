import { McpServer } from "@modelcontextprotocol/server";
import { serveStdio } from "@modelcontextprotocol/server/stdio";
import * as z from "zod/v4";
import { getUser, getAllUsers } from "./users.ts"; //Added getAllUsers from module users.ts

function createServer(): McpServer {
  const server = new McpServer({ name: "practice", version: "1.0.0" });

  server.registerTool(
    "get_user",
    {
      description: "Look up a user by their numeric ID and return their name, email and city",
      inputSchema: z.object({
        id: z.number().int().positive().describe("The user's ID, for example 1"),
      }),
    },
    async ({ id }) => {
      try {
        const user = await getUser(id);
        return {
          content: [{ type: "text", text: `${user.name} - ${user.email} - ${user.address.city}` }],
        };
      } catch (error) {
        const message = error instanceof Error ? error.message : String(error);
        console.error(`get_user ${id} failed: ${message}`);
        return {
          content: [{ type: "text", text: `Couldn't find user ${id}: ${message}` }],
          isError: true,
        };
      }
    }
  );

  //adding the second tool here:
  server.registerTool(
    "search_users",
    {
      description: "Find users whose name contains the given text (not case-sensitive)",
      inputSchema: z.object({
        text: z.string().min(1).describe("Part of a name, for example cle"),
      }),
    },
    async ({ text }) => {
      try {
        const users = await getAllUsers();
        const matches = users.filter((u) => u.name.toLowerCase().includes(text.toLowerCase()));
        if (matches.length === 0) {
          return { content: [{ type: "text", text: `No users match "${text}".` }] };
        }
        const lines = matches.map((u) => `#${u.id} ${u.name}`);
        return {
          content: [{ type: "text", text: `${matches.length} ${matches.length === 1 ? "user" : "users"} found:\n${lines.join("\n")}` }],
        };
      } catch (error) {
        const message = error instanceof Error ? error.message : String(error);
        console.error(`search_users "${text}" failed: ${message}`);
        return { content: [{ type: "text", text: `Search failed: ${message}` }], isError: true };
      }
    }
  );

  return server;
}

void serveStdio(createServer);
console.error("practice MCP server running on stdio");