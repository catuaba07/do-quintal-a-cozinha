import fs from "node:fs/promises";

export async function saveFile(file: File, path: string) {
  const arrayBuffer = await file.arrayBuffer();
  const buffer = new Uint8Array(arrayBuffer);
  await fs.writeFile(path, buffer);
}
