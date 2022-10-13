export const decrypt = (encryptedString: string): string => {
  const numberOfRows = 3;
  const numberOfColumns = encryptedString.length / numberOfRows;
  const firstLine = encryptedString.substring(0, numberOfColumns);
  const secondLine = encryptedString.substring(
    numberOfColumns,
    numberOfColumns * 2
  );
  const thirdLine = encryptedString.substring(
    numberOfColumns * 2,
    numberOfColumns * 3
  );

  const matriz = [
    Array.from(firstLine),
    Array.from(secondLine),
    Array.from(thirdLine),
  ];

  let decryptedString = "";

  let row = 0;
  let column = 0;

  while (true) {
    const char = matriz[row][column];

    if (!char) {
      break;
    }

    decryptedString += char;

    row += 1;
    column += 1;

    if (row > 2) {
      column = column - row + 1;
      row = 0;
    }
  }

  return decryptedString.replaceAll("_", " ").trim();
};
