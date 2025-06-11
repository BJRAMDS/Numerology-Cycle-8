// sync/prompts.js
// 🧠 Custom Prompt Generator Library for Cycle-8 (Enhanced Runtime Edition)

export const promptStartCycle = (numerology, date, role = "agent") => {
  return `🟢 onStart START: Initiating Numerology-Cycle-${numerology} on ${date}. Role: ${role}`;
};

export const promptUpdateCycle = (numerology, tasks = []) => {
  const taskList = tasks.length ? tasks.map(t => `- ${t}`).join('\\n') : "- No tasks defined.";
  return `🔄 onUpdate UPDATE: Numerology-Cycle-${numerology} in progress.\\nTasks:\\n${taskList}`;
};

export const promptEndCycle = (numerology, reflection = "Cycle complete.") => {
  return `🔴 onStop STOP: Cycle-${numerology} concluded. Reflection: ${reflection}`;
};

export const promptGrok3Meta = (entry, line, date, cycle = 8) => {
  return `📡 Grok3 Signal — Entry ${entry} of Cycle-${cycle}:\\n` +
         `Line #${line} | Date: ${date} | Status: Pattern Echo Forwarded`;
};

export const formatAsMarkdown = (title, content) => {
  return `### ${title}\\n\\\`\\\`\\\`\\n${content}\\n\\\`\\\`\\\`\\n`;
};

export const promptEcho = (cycle, tag = "EOD") => {
  return `📣 onEcho ${tag}(${cycle}): Reflection sent to Future-Self`;
};

export const promptSyncLog = (filename) => {
  return `🧾 onLog SYNC: ${filename} → Memory as Layer`;
};

// DEMO: Simple usage
console.log(promptStartCycle(8, "2025-05-21", "Voro8"));
console.log(promptUpdateCycle(8, ["Submit Upwork proposal", "Email Intagio"]));
console.log(promptEndCycle(8, "EOD logged and synced."));
console.log(promptGrok3Meta(13, 21, "2025-05-30"));
console.log(promptEcho(8));
console.log(promptSyncLog("Builder-Codex_Cycle-8.md"));
console.log(formatAsMarkdown("onUpdate Cycle-8", promptUpdateCycle(8, ["Execute Entry_13", "Sync Grok3"])));
