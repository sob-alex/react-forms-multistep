import { useState, useEffect } from 'react';

const useValidation = (value, validations) => {
  const [isEmpty, setEmpty] = useState(true);
  const [minLengthError, setMinLengthError] =
    useState(false);
  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case 'minLength':
          value.length < validations[validation]
            ? setMinLengthError(true)
            : setMinLengthError(false);
          break;
        case 'isEmpty':
          value ? setEmpty(false) : setEmpty(true);
          break;
        default:
          break;
      }
    }
  }, [value]);
  return {
    isEmpty,
    minLengthError,
  };
};

const useInput = (initialValue, validations) => {
  const [value, setValue] = useState(initialValue);
  const [isDirty, setIsDirty] = useState(false);
  const valid = useValidation(value, validations);
  const onChange = (e) => {
    setValue(e.target.value);
  };
  const onBlur = () => {
    setIsDirty(true);
  };
  return { value, onChange, onBlur, isDirty, ...valid };
};

function HookValidation() {
  const email = useInput('', {
    isEmpty: true,
    minLength: 3,
  });
  const password = useInput('', {
    isEmpty: true,
    minLength: 5,
  });
  return (
    <div className='App'>
      <form>
        <h1>Регистрация</h1>
        <div>
          <input
            name='email'
            type='text'
            value={email.value}
            placeholder='Enter your email'
            onBlur={email.onBlur}
            onChange={email.onChange}
          />
          {email.isDirty && email.isEmpty && (
            <div style={{ color: 'red' }}>
              Поле не может быть пустым
            </div>
          )}
          {email.isDirty && email.minLengthError && (
            <div style={{ color: 'red' }}>
              Некорректная длина
            </div>
          )}
        </div>
        <div>
          <input
            name='password'
            type='password'
            placeholder='Enter your password'
            value={password.value}
            onBlur={password.onBlur}
            onChange={password.onChange}
          />
          {password.isDirty && password.isEmpty && (
            <div style={{ color: 'red' }}>
              Поле не может быть пустым
            </div>
          )}
          {password.isDirty && password.minLengthError && (
            <div style={{ color: 'red' }}>
              Некорректная длина
            </div>
          )}
        </div>
        <button disabled={!formValid} type='submit'>
          Registration
        </button>
      </form>
    </div>
  );
}

export default HookValidation;
