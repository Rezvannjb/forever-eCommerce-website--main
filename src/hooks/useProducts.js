import { supabase } from "../lib/supabase";

export async function useProduct() {
    try {
        const { data, error } = await supabase
            .from("products")
            .select("*");
        console.log(data);

        if (error) return error
        return data

    } catch (err) {
        console.log(err);

    }
}