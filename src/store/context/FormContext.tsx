import React, {
  createContext,
  useState,
  useContext,
  FC,
} from 'react';
import { IFile } from '../../types/types';

interface DataInterface {
  firstName?: string;
  lastName?: string;
  email?: string;
  hasPhone?: boolean;
  files?: Array<IFile> | [];
  phoneNumber?: string;
}

interface DataContextInterface {
  data: DataInterface;
  setValues?: (values: DataInterface) => void;
}

const DataContext = createContext<DataContextInterface>({
  data: {},
});

export const DataFromProvider: FC = ({ children }) => {
  const [data, setData] = useState({});

  const setValues = (values: DataInterface) => {
    setData((prevData) => ({
      ...prevData,
      ...values,
    }));
  };

  return (
    <DataContext.Provider value={{ data, setValues }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
