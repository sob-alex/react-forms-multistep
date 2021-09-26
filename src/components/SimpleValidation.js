import { useState, useEffect } from 'react';

function SimpleValidation() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [emailError, setEmailError] = useState(
    'Email не может быть пустым'
  );
  const [passwordError, setPasswordError] = useState(
    'Пароль не может быть пустым'
  );
  const [formValid, setFormValid] = useState(false);
  useEffect(() => {
    if (emailError || passwordError) {
      setFormValid(false);
      return;
    }
    setFormValid(true);
  }, [emailError, passwordError]);

  const emailHandler = (e) => {
    const {
      target: { value },
    } = e;
    setEmail(value)
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!re.test(String(value).toLowerCase())) {
      setEmailError('Email некорректен');
      return;
    }
    setEmailError('');
  };
  const passwordHandler = (e) => {
    const {
      target: { value },
    } = e;
    setPassword(value);
    if (!value.length) {
      setPasswordError('Пароль не может быть пустым');
      return;
    }
    if (value.length < 4) {
      setPasswordError(
        'Пароль должен быть длинее 4 символов'
      );
      return;
    }

    setPasswordError('');
  };
  const blurHandler = (e) => {
    switch (e.target.name) {
      case 'email':
        setEmailDirty(true);
        break;
      case 'password':
        setPasswordDirty(true);
        break;

      default:
        break;
    }
  };

  return (
    <div className='App'>
      <form>
        <h1>Регистрация</h1>
        <div>
          <input
            name='email'
            type='text'
            placeholder='Enter your email'
            value={email}
            onBlur={(e) => blurHandler(e)}
            onChange={emailHandler}
          />
          {emailDirty && emailError && (
            <div style={{ color: 'red' }}>{emailError}</div>
          )}
        </div>
        <div>
          <input
            name='password'
            type='password'
            placeholder='Enter your password'
            value={password}
            onBlur={(e) => blurHandler(e)}
            onChange={passwordHandler}
          />
          {passwordDirty && passwordError && (
            <div style={{ color: 'red' }}>
              {passwordError}
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

export default SimpleValidation;
