import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';
import type { GoogleSpreadsheetRow } from 'google-spreadsheet';
import credentials from '../../credentials.json';

interface Book {
  title: string;
  author: string;
  googleBooksUrl: string;
  month: string;
}

interface YearlyBooks {
  year: number;
  books: Book[];
}

const SPREADSHEET_ID = '1xZfBupIyI0MezvG-8iACqHrzTrlNt4jqRYGuUZdrp-A';

async function getAllBooks(): Promise<YearlyBooks[]> {
  try {
    const jwt = new JWT({
      email: credentials.client_email,
      key: credentials.private_key,
      scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
    });

    const doc = new GoogleSpreadsheet(SPREADSHEET_ID, jwt);
    await doc.loadInfo();

    // Get all sheets and convert their titles to numbers
    const yearlyData = await Promise.all(
      Object.values(doc.sheetsByTitle)
        .filter(sheet => !isNaN(Number(sheet.title))) // Only process sheets with numeric names
        .map(async sheet => {
          const rows = await sheet.getRows();
          return {
            year: parseInt(sheet.title),
            books: rows.map((row: GoogleSpreadsheetRow) => ({
              title: row.get('Title'),
              author: row.get('Author'),
              googleBooksUrl: row.get('Link on Google Books'),
              month: row.get('Month'),
            }))
            .filter(book => book.title?.trim())
          };
        })
    );

    // Sort by year in descending order (most recent first)
    return yearlyData.sort((a, b) => b.year - a.year);
  } catch (error) {
    console.error('Error fetching books:', error);
    return [];
  }
}

export { getAllBooks };
export type { Book, YearlyBooks }; 