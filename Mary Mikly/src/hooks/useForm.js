import { useEffect, useMemo, useState } from 'react';

export const useForm = (initialForm = {}) => {

    const [formState, setFormState] = useState(initialForm);


    useEffect(() => {
        setFormState(initialForm)
    },[])


    const isFormValid = useMemo(() => {
        for (const formValue of Object.keys(formState)) {
            if (formState[formValue] === '') return false
        }
        return true

    }, [formState])


    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value
        });
    }

    const onResetForm = () => {
        setFormState(initialForm);
    }



    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
        isFormValid
    }
}