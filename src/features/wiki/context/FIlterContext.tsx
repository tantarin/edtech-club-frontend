import { PropsWithChildren, createContext, useContext, useState } from "react";

type IFilterContext = {
    filter: string,
    setFilter: React.Dispatch<React.SetStateAction<string>>
}


const FilterContext = createContext<IFilterContext>((null as unknown) as IFilterContext)


export const useFilter = () => {
    return useContext(FilterContext)
}
export const FilterContextPropvider: React.FC<PropsWithChildren> = ({ children }) => {
    const [filter, setFilter] = useState<string>('');

    const value = { filter, setFilter };
    return (
        <FilterContext.Provider value={value} >
            {children}
        </FilterContext.Provider>
    )
}