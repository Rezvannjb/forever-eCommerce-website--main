import { supabase } from "../lib/supabase"


export async function SignInByEmail(email, pass) {
    try {
        const { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: pass,
        })
        if (error) {
            return { sucsess: false, data: error }
        }
        return { sucsess: true, data: data }
    } catch (err) {
        return { sucsess: false, data: `CatchError:${err}` }
    }
}
export async function SignUpByEmail(email, pass) {
    try {
        const { data, error } = await supabase.auth.signUp({
            email: email,
            password: pass,
        })
        if (error) {
            return { sucsess: false, data: error }
        }

        return { sucsess: true, data: data }
    } catch (err) {
        return { sucsess: false, data: `CatchError:${err}` }
    }
}
export async function getuser() {
    try {
        const { data, error } = await supabase.auth.getSession()
        if (error) {
            return { sucsess: false, data: error }
        }
        return { sucsess: true, data: data }
    } catch (err) {
        return { sucsess: false, data: `CatchError:${err}` }
    }
}
export async function signOut() {
    const { error } = await supabase.auth.signOut()
    if (error) return { sucsess: false, data: error }
}