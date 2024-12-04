import {Ingredient} from "@prisma/client";
import {useEffect, useState} from "react";
import {Api} from "../services/api-client";
import {useSet} from "react-use";

interface ReturnProps {
    ingredients: Ingredient[];
    loading: boolean;
    selectedIds: Set<string>;
    onSetId: (id: string) => void
}

export const useFilterIngredients = (): ReturnProps => {

    const [ingredients, setIngredients] = useState<Ingredient[]>([])
    const [loading, setLoading] = useState<boolean>(false)

    const [selectedIds, {toggle}] = useSet(new Set<string>([]))

    const onSetId = (id: string) => {
        toggle(id)
    }

    useEffect(() => {
        async function getIngredients() {
            try {
                setLoading(true)
                const data = await Api.ingredients.getAll()
                setIngredients(data)
            } catch (e) {
                console.log(e)
            }finally {
                setLoading(false)
            }
        }

        getIngredients()

    }, []);

    return {ingredients, loading, selectedIds, onSetId}
}