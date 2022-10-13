export const encrypt = (message: string): string => {
  const numberOfRows = 3;
  const isExact = message.length % numberOfRows === 0;
  const numberOfColumns =
    message.length <= 3
      ? message.length
      : Math.ceil(message.length / numberOfRows) + (isExact ? 2 : 1);

  let matriz: Array<Array<string | undefined>> = [
    new Array(numberOfColumns).fill(undefined),
    new Array(numberOfColumns).fill(undefined),
    new Array(numberOfColumns).fill(undefined),
  ];

  let row = 0;
  let column = 0;

  message
    .replaceAll(" ", "_")
    .split("")
    .forEach((char) => {
      matriz[row][column] = char;

      row += 1;
      column += 1;

      if (row > 2) {
        column = column - row + 1;
        row = 0;
      }
    });

  matriz = matriz.map((array) =>
    array.map((char) => {
      if (!char) {
        return "_";
      }

      return char;
    })
  );

  const greatestArrayLength = matriz.reduce(
    (acc, array) => (array.length > acc ? array.length : acc),
    0
  );

  matriz = matriz.map((array) =>
    array.map((char, index) => {
      if (index === greatestArrayLength - 1) {
        if (char !== undefined) {
          return char;
        }

        return "_";
      }

      return char;
    })
  );

  const encryptedString = matriz.reduce(
    (acc, array) => acc + array.reduce((acc2, char) => acc2 + char!, ""),
    ""
  );

  return encryptedString;
};
