import React from 'react';

// match escaped "." characters via in a non-capturing group
const inputRegex = RegExp(`^\\d*(?:\\\\[.])?\\d*$`);

function escapeRegExp(string: string) {
  // $& means the whole matched string
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

type NumericalInputProps = {
  value: string | number;
  setter: (input: string) => void;
  prependSymbol?: string | undefined;
} & Omit<React.HTMLProps<HTMLInputElement>, 'ref' | 'onChange' | 'as'>;

function NumericalInput({ value, setter, placeholder, prependSymbol, ...rest }: NumericalInputProps) {
  const enforcer = (nextUserInput: string) => {
    if (nextUserInput === '' || inputRegex.test(escapeRegExp(nextUserInput))) {
      setter(nextUserInput);
    }
  }

  return (
    <input
      {...rest}
      value={prependSymbol && value ? prependSymbol + value : value}
      onChange={(event) => {
        if (prependSymbol) {
          const value = event.target.value;

          // cut off prepended symbol
          const formattedValue = value.toString().includes(prependSymbol)
            ? value.toString().slice(1, value.toString().length + 1)
            : value;

          // replace commas with periods, because uniswap exclusively uses period as the decimal separator
          enforcer(formattedValue.replace(/,/g, '.'));
        } else {
          enforcer(event.target.value.replace(/,/g, '.'));
        }
      }}
      // universal input options
      inputMode="decimal"
      autoComplete="off"
      autoCorrect="off"
      // text-specific options
      type="text"
      pattern="^[0-9]*[.,]?[0-9]*$"
      placeholder={placeholder || '0.0'}
      minLength={1}
      maxLength={79}
      spellCheck="false"
    />
  )
}

export default React.memo(NumericalInput);
