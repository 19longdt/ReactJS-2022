import Context from './Context';
import { useContext } from 'react';

export const useStore = () => {
    const [state, dispach] = useContext(Context);

    return [state, dispach]
}