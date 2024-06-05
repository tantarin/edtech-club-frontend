import { Reducer, useCallback, useReducer } from "react";

type State<T> = {
    status: string;
    data: T;
    error?: Error | null;
}

type Action = {
    type: string,
    data?: any,
    error?: Error | null
}

function asyncReducer<T>(state: State<T | null>, action: Action) {
    switch (action.type) {
        case 'pending': {
            return { status: 'pending', data: null, error: null }
        }
        case 'resolved': {
            return { status: 'resolved', data: action.data, error: null }
        }
        case 'rejected': {
            return { status: 'rejected', data: null, error: action.error }
        }
        default: {
            throw new Error(`Unhandled action type: ${action.type}`)
        }
    }
}

export const useAsync = function <T>(initialState?: Partial<State<T>>) {
    const [state, dispatch] = useReducer<Reducer<State<T | null>, Action>>(asyncReducer, {
        status: 'idle',
        data: null,
        error: null,
        ...initialState,
    })

    const { data, error, status } = state

    const run = useCallback(
        function <T>(promise: Promise<T>) {
            dispatch({ type: 'pending' })
            promise.then(
                data => {
                    dispatch({ type: 'resolved', data })
                },
                error => {
                    dispatch({ type: 'rejected', error })
                },
            )
        },
        [dispatch],
    )

    const setData = useCallback(
        (data: any) => dispatch({ type: 'resolved', data }),
        [dispatch],
    )
    const setError = useCallback(
        (error: Error) => dispatch({ type: 'rejected', error }),
        [dispatch],
    )

    return {
        setData,
        setError,
        error,
        status,
        data,
        run,
    }
}