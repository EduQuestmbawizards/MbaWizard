/**
 * Sanitize Elementor/WordPress raw HTML for clean rendering without Elementor CSS/JS.
 * Strips Elementor structural wrapper divs, inline styles, and scripts while
 * preserving meaningful text content (headings, paragraphs, lists, tables, images).
 */
export function sanitizeWpHtml(rawHtml: string): string {
  if (!rawHtml) return "";

  let html = rawHtml;

  // 1. Remove <script> and <style> blocks entirely
  html = html.replace(/<script[\s\S]*?<\/script>/gi, "");
  html = html.replace(/<style[\s\S]*?<\/style>/gi, "");

  // 2. Remove <noscript> blocks
  html = html.replace(/<noscript[\s\S]*?<\/noscript>/gi, "");

  // 3. Replace Elementor section/column/widget wrappers with their inner content
  // These are pure structural divs with no semantic meaning
  const elementorWrapperTags = [
    "elementor-container",
    "elementor-row",
    "elementor-column",
    "elementor-column-wrap",
    "elementor-widget-wrap",
    "elementor-widget-container",
    "elementor-section",
    "elementor-inner-section",
    "elementor-top-section",
    "elementor-inner",
  ];

  // Unwrap Elementor structural divs (replace with content only)
  for (const cls of elementorWrapperTags) {
    const re = new RegExp(
      `<div[^>]*class="[^"]*${cls}[^"]*"[^>]*>`,
      "gi"
    );
    html = html.replace(re, "");
  }

  // 4. Remove empty divs with only Elementor data attributes
  html = html.replace(
    /<div[^>]*data-elementor[^>]*>\s*<\/div>/gi,
    ""
  );

  // 5. Remove inline style attributes that break layout
  // (keep class attributes so our CSS can still work)
  html = html.replace(/\sstyle="[^"]*"/gi, "");

  // 6. Remove data-* attributes from Elementor (except data-elementor-id which can stay for ID)
  html = html.replace(/\sdata-elementor-[a-z-]+="[^"]*"/gi, "");
  html = html.replace(/\sdata-settings="[^"]*"/gi, "");
  html = html.replace(/\sdata-widget_type="[^"]*"/gi, "");
  html = html.replace(/\sdata-element_type="[^"]*"/gi, "");
  html = html.replace(/\sdata-id="[^"]*"/gi, "");

  // 7. Remove Elementor-specific class names that would reference missing CSS
  html = html.replace(/\sclass="elementor[^"]*"/gi, "");

  // 8. Strip empty paragraphs and excessive whitespace
  html = html.replace(/<p>\s*<\/p>/gi, "");
  html = html.replace(/<p>\s*&nbsp;\s*<\/p>/gi, "");
  html = html.replace(/(<br\s*\/?>\s*){3,}/gi, "<br />");

  // 9. Fix common encoding issues
  html = html.replace(/&#8211;/g, "–");
  html = html.replace(/&#8212;/g, "—");
  html = html.replace(/&#8216;/g, "\u2018");
  html = html.replace(/&#8217;/g, "\u2019");
  html = html.replace(/&#8220;/g, "\u201C");
  html = html.replace(/&#8221;/g, "\u201D");
  html = html.replace(/&#8230;/g, "…");

  // 10. Remove leftover empty div/span containers
  html = html.replace(/<div>\s*<\/div>/gi, "");
  html = html.replace(/<span>\s*<\/span>/gi, "");

  return html.trim();
}
