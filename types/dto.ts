import { Database } from "./supabase";


export type CourseDTO = Database["public"]["Tables"]["courses"]["Row"]

export type SectionDTO = Database["public"]["Tables"]["sections"]["Row"]
