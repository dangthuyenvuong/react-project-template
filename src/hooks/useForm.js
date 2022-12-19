import { useState } from "react"
import { validate } from "../utils/validate"

/**
 * 
 * @param {*} rules 
 * @return register, values, errors, validate
 */
export const useForm = (rules, initialValue = {}) => {
    const [values, setValues] = useState(initialValue)
    const [errors, setError] = useState({})

    const register = (name) => {
        return {
            error: errors[name],
            value: values[name] || '',
            onChange: (ev) => {
                let _values = { ...values, [name]: ev.target.value }
                if (rules[name]) {
                    const error = validate({
                        [name]: rules[name]
                    },_values)

                    setError({ ...errors, [name]: error[name] || '' })
                }


                setValues(_values)
            }
        }
    }

    const _validate = () => {
        const errorObject = validate(rules, values)

        setError(errorObject)

        return Object.keys(errorObject).length === 0
    }

    const reset = () => {
        setValues({})
    }

    return {
        values,
        errors,
        register,
        validate: _validate,
        reset
    }
}