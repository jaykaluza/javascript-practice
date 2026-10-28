import { McpServer } from "@modelcontextprotocol/server"; //bring McpServer class from MCP SDK that I installed right before this step.

//brings in serveStdio from the MCP SDK. It connects my server to stdin and stdout. The hosts writes 
//writes reqeusts to stdout and reads answers from stdin.
import { serveStdio } from "@modelcontextprotocol/server/stdio"; 
import * as z from "zod/v4";

//the line below creates a new function and returns McpServer. Its whole job is to build the server and set up its tools.
function createServer(): McpServer {
    //new makes an actual new object (server) from McpServer bluprint (class). The object I pass to it gives it a name and version
    //the hosts sees these during handshake. Thats' why inspector show hello in the upper left corner. 
    const server = new McpServer( {name: "hello", version: "1.0.0" });

    //Here I have the object- mcp server. I need to register my tools. That's the whole point to have this server: list tools.
    server.registerTool(
        //this is the name of my tool
        "say_hello",
        {
            //description is not for me, it's for AI to know what to do
            description: "Say hello to someone by name",
            //this says: this tool takes one field, name, and it must be a string
            inputSchema: z.object( {
                //descrition is again for AI to know what to put inside. 'The person's first name'.
                name: z.string().describe("The person's first name"),
            }),
        },
        //the handler - the code that actually does the work. async is needed because tools often wait for things like fetch
        //This doesn't really wait but the SDK expects an async function.
        async ({ name }) => ({
            content: [{type: "text", text: `Hello, ${name}! Your MCP server works.`}],
        })
    );
    return server;
}
console.error("Starting");
void serveStdio(createServer); //no parenthesis because I'm handing the function, not running it. Void prevents warning from being returned. 
console.error("hello MCP server running on stdio");