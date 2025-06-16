interface Logger extends Omit<Console, "log" | "error" | "warn" | "info"> {
  log(...params: string[]): void;
  error(...params: string[]): void;
  warn(...params: string[]): void;
  info(...params: string[]): void;
}

interface Palette {
  dye(color: string, text: string): string;
  colors: {
    yellow: string;
    red: string;
    white: string;
    blue: string;
    green: string;
  };
  clean: string;
}

export const logger: Logger;
export const palette: Palette;