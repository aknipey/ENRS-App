import * as XLSXStyle from "xlsx-js-style";
import {
  EXCEEDED_ROW_FORMATTING,
  EXCEEDED_STANDARDS_COL,
  HEADER_FORMATTING,
  PREFIX_COL,
} from "../consts/xlsxFormattingConsts";

export const applyHeaderFormatting = (ws: XLSXStyle.WorkSheet): void => {
  const headerRange: XLSXStyle.Range = XLSXStyle.utils.decode_range(
    ws["!ref"] as string
  );

  // Apply bold font and blue colour to header row
  for (let col = headerRange.s.c; col <= headerRange.e.c; col++) {
    const headerCellIndex: string = XLSXStyle.utils.encode_cell({
      r: headerRange.s.r,
      c: col,
    });
    ws[headerCellIndex].s = HEADER_FORMATTING;
  }

  // Loop through each row starting from the second row (index 1)
  for (let row = headerRange.s.r + 1; row <= headerRange.e.r; row++) {
    const cellValue =
      ws[XLSXStyle.utils.encode_cell({ r: row, c: EXCEEDED_STANDARDS_COL })]?.v;

    if (cellValue) {
      // Apply red background color to all cells in the row
      for (let col = headerRange.s.c; col <= headerRange.e.c; col++) {
        const cellIndex: string = XLSXStyle.utils.encode_cell({
          r: row,
          c: col,
        });
        ws[cellIndex].s = EXCEEDED_ROW_FORMATTING; // Red background color
      }
    }
  }

  // Loop through each row starting from the second row (index 1)
  for (let row = headerRange.s.r + 1; row <= headerRange.e.r; row++) {
    const negligible =
      ws[XLSXStyle.utils.encode_cell({ r: row, c: PREFIX_COL })]?.v === "<";

    if (!negligible) {
      // Bold the value
      const cellIndex: string = XLSXStyle.utils.encode_cell({
        r: row,
        c: 4,
      });
      ws[cellIndex].s = { font: { bold: true }, ...ws[cellIndex].s }; // Bold
    }
  }
};

// Convert s to an array buffer
export const s2ab = (s: string): ArrayBuffer => {
  const buf: ArrayBuffer = new ArrayBuffer(s.length);
  const view: Uint8Array = new Uint8Array(buf);
  for (let i = 0; i < s.length; i++) view[i] = s.charCodeAt(i) & 0xff;
  return buf;
};
