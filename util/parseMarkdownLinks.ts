export function parseMarkdownLinksToHtml(markdown: string): string {
  const markdownLinks = markdown.match(/\[.*?\]\(.*?\)/g) || [];

  const htmlLinks = markdownLinks.map((markdownLink) => {
    const linkText = markdownLink.match(/\[(.*?)\]/)![1];
    const linkUrl = markdownLink.match(/\((.*?)\)/)![1];
    return `<a href="${linkUrl}" target="_blank" rel="noopener noreferrer">${linkText}</a>`;
  });

  // replace markdown links with html links
  const html = markdownLinks.reduce((acc, curr, index) => {
    return acc.replace(curr, htmlLinks[index]);
  }, markdown);

  return html;

}