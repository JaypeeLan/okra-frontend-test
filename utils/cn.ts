type Value = string | number | boolean | undefined | null;
type Mapping = Record<string, unknown>;
type ArgumentArray = Array<Argument>;
type ReadonlyArgumentArray = ReadonlyArray<Argument>;
type Argument = Value | Mapping | ArgumentArray | ReadonlyArgumentArray;

function cn(...args: ArgumentArray): string {
  const classes: string[] = [];

  args.forEach((arg) => {
    if (!arg) return;

    if (typeof arg === "string" || typeof arg === "number") {
      classes.push(arg.toString());
    } else if (Array.isArray(arg)) {
      classes.push(cn(...arg));
    } else if (typeof arg === "object") {
      Object.keys(arg).forEach((key) => {
        if ((arg as Mapping)[key]) {
          classes.push(key);
        }
      });
    }
  });

  return classes.join(" ");
}

export default cn;
