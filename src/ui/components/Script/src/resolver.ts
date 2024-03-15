export async function getDTsFilesContents(entryPoint: string): Promise<string[]> {
  const results: string[] = [];
  
  async function fetchDTsFileContent(url: string): Promise<string | null> {
    try {
      const response = await fetch(url);
      if (response.ok) return await response.text();
      return null;
    } catch (error) {
      return null;
    }
  }

  async function processIndexDTs(url: string): Promise<void> {
    const content = await fetchDTsFileContent(url);
    if (!content) return;
    
    const lines = content.split('\n');
    for (const line of lines) {
      const match = line.match(/^\s*export\s+\*\s+from\s+"([^"]+)";\s*$/);
      if (match) {
        const exportPath = match[1].slice(1);
        const nextUrl = url.replace("/index.d.ts", "") + exportPath + '/index.d.ts';
        const nextContent = await fetchDTsFileContent(nextUrl);
        if (nextContent) {
          results.push(nextContent);
          await processIndexDTs(nextUrl);
        } else {
          const fallbackUrl = url.replace("/index.d.ts", "") + exportPath + '.d.ts';
          const fallbackContent = await fetchDTsFileContent(fallbackUrl);
          if (fallbackContent) {
            results.push(fallbackContent);
            await processIndexDTs(fallbackUrl);
          }
        }
      }
    }
  }

  await processIndexDTs(entryPoint);
  return results;
}