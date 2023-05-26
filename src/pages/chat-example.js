import React from "react";

export default function ChatExample() {
  return (
    <div className="max-w-4xl w-full mx-auto p-4">
      <h1 className="text-lg font-bold mb-4 px-4">
        This is useLLM chat Example
      </h1>
      <div className="w-full py-4 flex px-4">
        <input className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" />
        <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-10 py-2 px-4 ml-2">
          Send
        </button>
      </div>
    </div>
  );
}
