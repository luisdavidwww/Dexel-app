import { useState } from 'react';

export const useForm = <T extends Object>( initState: T ) => {
    
    const [state, setState] = useState( initState );

    //para cambiar datos del formulario
    const onChange = ( value: string, field: keyof T ) => {
        setState({
            ...state,
            [field]: value
        });
        
    }

    //en el caso que queramos actualizar todos los valores del formulario
    const setFormValue = ( form: T ) =>{
        setState( form );
    }

    return {
        ...state,
        form: state,
        onChange,
        setFormValue
    }

}