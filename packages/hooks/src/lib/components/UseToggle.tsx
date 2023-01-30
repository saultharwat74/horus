import React from 'react';
import { useToggle } from '../useToggle';

interface UseToggleProps {}
export const UseToggle: React.FC<UseToggleProps> = () => {
  const [toggle, setToggle] = useToggle();

  return <button onClick={setToggle}>{toggle ? 'Toggled' : 'Toggle'}</button>;
};

export default UseToggle;