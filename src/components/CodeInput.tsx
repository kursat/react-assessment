import React, { useCallback, useEffect, useState } from 'react';
import FormInput from './FormInput';

interface PropTypes {
  onChange?: Function;
}

const CodeInput: React.FC<PropTypes> = ({ onChange }) => {
  const [numbers, setNumbers] = useState<string[]>(new Array(6).fill(''));

  const onChangeNumber = useCallback((e: any, index: number) => {
    setNumbers((previousValues) => {
      return [
        ...previousValues.slice(0, index),
        e.target.value,
        ...previousValues.slice(index + 1, previousValues.length),
      ];
    });

    if (e.target.value.length) {
      if (e.target.nextSibling) e.target.nextSibling.focus();
    } else {
      if (e.target.previousSibling) e.target.previousSibling.focus();
    }
  }, []);

  useEffect(() => {
    onChange?.(numbers.join(''));
  }, [numbers, onChange]);

  return (
    <div className="flex justify-center gap-3 justify-between">
      {numbers.map((number, numberIndex) => {
        return (
          <FormInput
            key={numberIndex}
            maxLength={1}
            className="border-gray-250 text-center text-black w-11 h-11 m-0 px-0 bg-black-rgba"
            value={number}
            onChange={(e) => onChangeNumber(e, numberIndex)}
          />
        );
      })}
    </div>
  );
};

export default React.memo(CodeInput);
