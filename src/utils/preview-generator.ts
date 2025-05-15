
// Updated function signature to match the calls in use-preview-actions.ts
export const generatePreviewHTML = (
  data: any[], 
  moduleName: string, 
  columns?: { key: string, header: string }[],
  locale?: string
): string => {
  const title = `Aperçu - ${moduleName}`;
  
  // Create basic HTML structure
  let html = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>${title}</title>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        body { font-family: system-ui, sans-serif; margin: 0; padding: 20px; }
        table { width: 100%; border-collapse: collapse; margin: 20px 0; }
        th, td { padding: 12px; text-align: left; border-bottom: 1px solid #ddd; }
        th { background-color: #f8f8f8; font-weight: 600; }
        h1 { margin-bottom: 10px; }
        .meta { color: #666; margin-bottom: 20px; font-size: 14px; }
        .footer { margin-top: 30px; font-size: 12px; color: #666; border-top: 1px solid #ddd; padding-top: 10px; }
      </style>
    </head>
    <body>
      <h1>${title}</h1>
      <div class="meta">
        Généré le: ${new Date().toLocaleDateString(locale || 'fr-FR')}
      </div>
  `;

  // Add table with data
  if (data && data.length > 0) {
    html += '<table><thead><tr>';
    
    // Table headers
    if (columns && columns.length > 0) {
      columns.forEach(column => {
        html += `<th>${column.header}</th>`;
      });
    } else {
      // Use object keys if no columns provided
      Object.keys(data[0]).forEach(key => {
        html += `<th>${key}</th>`;
      });
    }
    
    html += '</tr></thead><tbody>';
    
    // Table rows
    data.forEach(item => {
      html += '<tr>';
      
      if (columns && columns.length > 0) {
        columns.forEach(column => {
          html += `<td>${item[column.key] !== undefined ? item[column.key] : ''}</td>`;
        });
      } else {
        Object.values(item).forEach(value => {
          html += `<td>${value !== undefined ? value : ''}</td>`;
        });
      }
      
      html += '</tr>';
    });
    
    html += '</tbody></table>';
  } else {
    html += '<p>Aucune donnée disponible</p>';
  }

  // Close HTML
  html += `
      <div class="footer">
        © ${new Date().getFullYear()} Agri Dom - Document généré automatiquement
      </div>
    </body>
    </html>
  `;

  return html;
};
